import { AppCommand, CommandResult, ErrorCodes, failure, hasArg, help, longName, required, shortName, success } from "../../util/commandline";
import { MobileCenterClient, models, clientRequest, ClientResponse } from "../../util/apis";
import { out } from "../../util/interaction";
import { inspect } from "util";
import * as _ from "lodash";
import * as Request from "request";
import * as Path from "path";
import * as Pfs from "../../util/misc/promisfied-fs";
import { DefaultApp } from "../../util/profile";
import * as Os from "os";
import { parseDate } from "./lib/date-parsing-helper";
import { startDateHelpMessage, endDateHelpMessage } from "./lib/analytics-constants";

const debug = require("debug")("mobile-center-cli:commands:analytics:app-versions");

@help("Shows versions of the application")
export default class ShowAppVersionsCommand extends AppCommand {
  @help(startDateHelpMessage)
  @shortName("s")
  @longName("start")
  @hasArg
  public startDate: string;

  @help(endDateHelpMessage)
  @shortName("e")
  @longName("end")
  @hasArg
  public endDate: string;

  @help("Show device count for each version")
  @longName("devices")
  public devices: boolean;

  public async run(client: MobileCenterClient): Promise<CommandResult> {
    const app: DefaultApp = this.app;

    const startDate = parseDate(this.startDate, 
      new Date(new Date().setHours(0, 0, 0, 0)), 
      `start date value ${this.startDate} is not a valid date string`);

    const endDate = parseDate(this.endDate,
      new Date(),
      `end date value ${this.endDate} is not a valid date string`);

    let listOfVersions: models.Version[];
    try {
      const httpRequest = await out.progress("Getting list of application versions...",
        clientRequest<models.Versions>((cb) => client.analytics.versions(startDate, app.ownerName, app.appName, {
          end: endDate
        }, cb)));
      listOfVersions = httpRequest.result.versionsProperty;
    } catch (error) {
      debug(`Failed to get list of application versions - ${inspect(error)}`);
      throw failure(ErrorCodes.Exception, "failed to get list of application versions");
    }

    if (this.devices) {
      const outputArray = listOfVersions.map((version) => [version.versionProperty, String(version.count)]);
      out.table(out.getCommandOutputTableOptions(["Version", "Number Of Devices"]), outputArray);
    } else {
      if (listOfVersions.length) {
        out.list((version) => version, listOfVersions.map((version) => version.versionProperty));
      } else {
        out.text(() => "No records found", []);
      }
    }    
    
    return success();
  }
}
