import { CommandArgs, help, success, name, shortName, longName, required, hasArg,
         ErrorCodes } from "../../../util/commandline";
import { UITestPreparer } from "../lib/uitest-preparer";
import { PrepareTestsCommand } from "../lib/prepare-tests-command";
import { out } from "../../../util/interaction";
import * as outExtensions from "../lib/interaction";
import * as process from "../../../util/misc/process-helper";
import { Messages } from "../lib/help-messages";

const debug = require("debug")("appcenter-cli:commands:tests:prepare");

@help(Messages.TestCloud.Commands.PrepareUITests)
export default class PrepareUITestCommand extends PrepareTestsCommand {
  @help(Messages.TestCloud.Arguments.AppPath)
  @longName("app-path")
  @required
  @hasArg
  appPath: string;

  @help(Messages.TestCloud.Arguments.UITestsBuildDir)
  @longName("build-dir")
  @hasArg
  @required
  buildDir: string;

  @help("Obsolete. Please use --build-dir instead")
  @longName("assembly-dir")
  @hasArg
  assemblyDir: string;

  @help(Messages.TestCloud.Arguments.UITestsStoreFilePath)
  @longName("store-path")
  @hasArg
  storePath: string;

  @help(Messages.TestCloud.Arguments.UITestsStorePassword)
  @longName("store-password")
  @hasArg
  storePassword: string;

  @help(Messages.TestCloud.Arguments.UITestsKeyAlias)
  @longName("key-alias")
  @hasArg
  keyAlias: string;

  @help(Messages.TestCloud.Arguments.UITestsKeyPassword)
  @longName("key-password")
  @hasArg
  keyPassword: string;

  @help(Messages.TestCloud.Arguments.UITestsSignInfo)
  @longName("sign-info")
  @hasArg
  signInfo: string;

  @help(Messages.TestCloud.Arguments.UITestsToolsDir)
  @longName("uitest-tools-dir")
  @hasArg
  uiTestToolsDir: string;

  @help(Messages.TestCloud.Arguments.Fixture)
  @longName("fixture")
  @hasArg
  fixture: string[];

  @help(Messages.TestCloud.Arguments.IncludeCategory)
  @longName("include-category")
  @hasArg
  includeCategory: string[];

  @help(Messages.TestCloud.Arguments.ExcludeCategory)
  @longName("exclude-category")
  @hasArg
  excludeCategory: string[];

  @help(Messages.TestCloud.Arguments.NUnitXml)
  @longName("nunit-xml")
  @hasArg
  nunitXml: string;

  @help(Messages.TestCloud.Arguments.TestChunk)
  @longName("test-chunk")
  @hasArg
  testChunk: boolean;

  @help(Messages.TestCloud.Arguments.FixtureChunk)
  @longName("fixture-chunk")
  @hasArg
  fixtureChunk: boolean;

  constructor(args: CommandArgs) {
    super(args);

    this.fixture = this.fixArrayParameter(this.fixture);
    this.includeCategory = this.fixArrayParameter(this.includeCategory);
    this.excludeCategory = this.fixArrayParameter(this.excludeCategory);
  }

  protected async validateOptions(): Promise<void> {
    if (this.assemblyDir && !this.buildDir) {
      out.text("Argument --assembly-dir is obsolete. Please use --build-dir instead.")
      this.buildDir = this.assemblyDir;
    }

    if (!this.buildDir) {
      throw new Error("Argument --build-dir is required");
    }
  }

  protected prepareManifest(): Promise<string> {
    let preparer = new UITestPreparer(this.artifactsDir, this.buildDir, this.appPath);

    preparer.storeFile = this.storePath;
    preparer.storePassword = this.storePassword;
    preparer.keyAlias = this.keyAlias;
    preparer.keyPassword = this.keyPassword;
    preparer.uiTestToolsDir = this.uiTestToolsDir;
    preparer.fixture = this.fixture;
    preparer.includeCategory = this.includeCategory;
    preparer.excludeCategory = this.excludeCategory;
    preparer.nunitXml = this.nunitXml;
    preparer.testChunk = this.testChunk;
    preparer.fixtureChunk = this.fixtureChunk;

    return preparer.prepare();
  }

  protected getSourceRootDir() {
    return this.buildDir;
  }
}
