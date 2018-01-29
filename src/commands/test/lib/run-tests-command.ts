import { AppCommand, CommandArgs, CommandResult,
         help, success, name, shortName, longName, required, hasArg,
         failure, ErrorCodes } from "../../../util/commandline";
import { TestCloudUploader, StartedTestRun } from "./test-cloud-uploader";
import { TestCloudError } from "./test-cloud-error";
import { StateChecker } from "./state-checker";
import { AppCenterClient } from "../../../util/apis";
import { StreamingArrayOutput } from "../../../util/interaction";
import { getUser } from "../../../util/profile";
import { parseTestParameters } from "./parameters-parser";
import { parseIncludedFiles } from "./included-files-parser";
import { progressWithResult } from "./interaction";
import { ITestCloudManifestJson, ITestFrameworkJson, IFileDescriptionJson } from "./test-manifest-reader";
import { Messages } from "./help-messages";
import * as _ from "lodash";
import * as pfs from "../../../util/misc/promisfied-fs";
import * as path from "path";
import * as temp from "temp";
import * as os from "os";

export abstract class RunTestsCommand extends AppCommand {

  @help(Messages.TestCloud.Arguments.AppPath)
  @longName("app-path")
  @hasArg
  appPath: string;

  @help(Messages.TestCloud.Arguments.RunDevices)
  @longName("devices")
  @hasArg
  @required
  devices: string;

  @help(Messages.TestCloud.Arguments.RunDSymDir)
  @longName("dsym-dir")
  @hasArg
  dSymDir: string;

  @help(Messages.TestCloud.Arguments.RunLocale)
  @longName("locale")
  @hasArg
  locale: string;

  @help(Messages.TestCloud.Arguments.RunLanguage)
  @longName("language")
  @hasArg
  language: string;

  @help(Messages.TestCloud.Arguments.RunTestSeries)
  @longName("test-series")
  @hasArg
  testSeries: string;

  @help(Messages.TestCloud.Arguments.Include)
  @longName("include")
  @hasArg
  include: string[];

  @help(Messages.TestCloud.Arguments.TestParameter)
  @longName("test-parameter")
  @shortName("p")
  @hasArg
  testParameters: string[];

  @help(Messages.TestCloud.Arguments.RunAsync)
  @longName("async")
  async: boolean;

  @help(Messages.TestCloud.Arguments.Timeout)
  @longName("timeout")
  @hasArg
  timeoutSec: number;

  protected isAppPathRquired = true;
  private readonly streamingOutput = new StreamingArrayOutput();

  constructor(args: CommandArgs) {
    super(args);

    this.testParameters = this.fixArrayParameter(this.testParameters);
    this.include = this.fixArrayParameter(this.include);

    if (this.timeoutSec && typeof this.timeoutSec === "string") {
      this.timeoutSec = parseInt(this.timeoutSec);
    }
  }

  // Override this if you need to validate options
  protected async validateOptions(): Promise<void> {
  }

  public async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    if (this.isAppPathRquired && !this.appPath) {
      throw new Error("Argument --app-path is required");
    }
    await this.validateOptions();
    try {
      let artifactsDir = await this.getArtifactsDir();
      this.streamingOutput.start();
      try {
        let manifestPath = await progressWithResult("Preparing tests", this.prepareManifest(artifactsDir));
        await this.addIncludedFilesAndTestParametersToManifest(manifestPath);
        let testRun = await this.uploadAndStart(client, manifestPath, portalBaseUrl);

        this.streamingOutput.text(function (testRun){
          let report: string = `Test run id: "${testRun.testRunId}"` + os.EOL;
          report += "Accepted devices: " + os.EOL;
          testRun.acceptedDevices.map(item => `  - ${item}`).forEach(text => report+=text + os.EOL);
          if (testRun.rejectedDevices && testRun.rejectedDevices.length > 0) {
            report += "Rejected devices: " + os.EOL;
            testRun.rejectedDevices.map(item => `  - ${item}`).forEach(text => report+=text + os.EOL);
          }
          return report;
        }, testRun );

        if (!this.async) {
          let exitCode = await this.waitForCompletion(client, testRun.testRunId);

          switch (exitCode) {
            case 1:
              return failure(exitCode, `There were Test Failures.${os.EOL}Test Report: ${testRun.testRunUrl}`);
            case 2:
              return failure(exitCode, `Cannot run tests. Returning exit code ${exitCode}.
                ${os.EOL}Test Report: ${testRun.testRunUrl}`);
          }
        }

        this.streamingOutput.text(function (testRun){
          let report: string = `Test Report: ${testRun.testRunUrl}` + os.EOL;
          return report;
        }, testRun );

        return success();
      }
      finally {
        await this.cleanupArtifactsDir(artifactsDir);
        this.streamingOutput.finish();
      }
    }
    catch (err) {
      let exitCode = err.exitCode || err.errorCode || ErrorCodes.Exception;
      let message : string = null;
      let profile = getUser();

      let helpMessage = `Further error details: For help, please send both the reported error above and the following environment information to us by going to https://appcenter.ms/apps and starting a new conversation (using the icon in the bottom right corner of the screen)${os.EOL}
        Environment: ${os.platform()}
        App Upload Id: ${this.identifier}
        Timestamp: ${Date.now()}
        Operation: ${this.constructor.name}
        Exit Code: ${exitCode}`;

      if (profile) {
        helpMessage += `
        User Email: ${profile.email}
        User Name: ${profile.userName}
        User Id: ${profile.userId}
        `;
      }

      if (err.message && err.message.indexOf("Not Found") !== -1)
      {
        message = `Requested resource not found - please check --app: ${this.identifier}${os.EOL}${os.EOL}${helpMessage}`;
      }
      if (err.errorCode === 5)
      {
        message = `Unauthorized error - please check --token or log in to the appcenter CLI.${os.EOL}${os.EOL}${helpMessage}`;
      }
      else if (err.errorMessage)
      {
        message = `${err.errorMessage}${os.EOL}${os.EOL}${helpMessage}`;
      }
      else
      {
        message = `${err.message}${os.EOL}${os.EOL}${helpMessage}`;
      }

      return failure(exitCode, message);
    }
  }

  private async addIncludedFilesAndTestParametersToManifest(manifestPath: string): Promise<void> {
    let manifestJson = await pfs.readFile(manifestPath, "utf8");
    let manifest = JSON.parse(manifestJson) as ITestCloudManifestJson;

    await this.addIncludedFiles(path.dirname(manifestPath), manifest);

    let modifiedJson = JSON.stringify(manifest, null, 1);
    await pfs.writeFile(manifestPath, modifiedJson);
  }

  protected prepareManifest(artifactsDir: string): Promise<string> {
    throw new Error("This method must be overriden in derived classes");
  }

  protected getSourceRootDir(): string {
    throw new Error("This method must be overriden in derived classes");
  }

  protected async cleanupArtifactsDir(artifactsDir: string): Promise<void> {
    await pfs.rmDir(artifactsDir, true);
  }

  private artifactsDir: string;

  protected async getArtifactsDir(): Promise<string> {
    return this.artifactsDir || (this.artifactsDir = await pfs.mkTempDir("appcenter-upload"));
  }

  protected async uploadAndStart(client: AppCenterClient, manifestPath: string, portalBaseUrl: string): Promise<StartedTestRun> {
    let uploader = new TestCloudUploader(
      client,
      this.app.ownerName,
      this.app.appName,
      manifestPath,
      this.devices,
      portalBaseUrl);

    uploader.appPath = this.appPath;
    uploader.language = this.language;
    uploader.locale = this.locale;
    uploader.testSeries = this.testSeries;
    uploader.dSymPath = this.dSymDir;

    if (this.testParameters) {
      uploader.testParameters = parseTestParameters(this.testParameters);
    }

    return await uploader.uploadAndStart();
  }

  private waitForCompletion(client: AppCenterClient, testRunId: string): Promise<number> {
    let checker = new StateChecker(client, testRunId, this.app.ownerName, this.app.appName, this.streamingOutput);
    return checker.checkUntilCompleted(this.timeoutSec);
  }

  protected async addIncludedFiles(artifactsDir: string, manifest: ITestCloudManifestJson): Promise<void> {
    if (!this.include) {
      return;
    }

    let includedFiles = parseIncludedFiles(this.include, this.getSourceRootDir());
    for (let i = 0; i < includedFiles.length; i++) {
      let includedFile = includedFiles[i];
      let copyTarget = path.join(artifactsDir, includedFile.targetPath);
      await pfs.cp(includedFile.sourcePath, copyTarget);

      manifest.files.push(includedFile.targetPath);
    }
  }
}
