import { CommandArgs,
         help } from "../../../util/commandline";
import { GenerateCommand } from "../lib/generate-command";
import { Messages } from "../lib/help-messages";

@help(Messages.TestCloud.Commands.GenerateUITest)
export default class GenerateUITestCommand extends GenerateCommand {

  constructor(args: CommandArgs) {
    super(args);
  }

  protected zipPathAndroid = "UITest/Android-1.1.zip";
  protected zipPathiOS = "UITest/iOS-1.1.zip";
}
