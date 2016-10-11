import * as path from "path";

import { expect } from "chai";
import * as sinon from "sinon";

import { Command } from "../../../src/util/commandline";
import { CommandLoader, loader } from "../../../src/util/commandline/command-loader";
import { CommandFinder, finder } from "../../../src/util/commandline/command-finder";

describe("Loading commands", function () {
  it("should return class when the command exists", function () {
    let commandLoader = loader(finder(path.join(__dirname, "sample-commands")));
    let [command, _] = commandLoader(["cmd1"]);
    expect(command).to.be.a("function")
      .and.property("name", "Command1");
  });

  it("should return null if command doesn't exist", function () {
    let commandLoader = loader(finder(path.join(__dirname, "sample-commands")));
    expect(commandLoader(["no", "such", "command"])).to.be.null;
  });

  it("should call loader to find command to load", function () {
    let commandFinder = finder(path.join(__dirname, "sample-commands"));
    let findSpy = sinon.spy(commandFinder);
    let commandLoader = loader(findSpy);
    commandLoader(["cmd1"]);

    expect(findSpy.calledOnce).to.be.true;
    expect(findSpy.firstCall.args).to.have.lengthOf(1);
    let args = findSpy.firstCall.args[0];
    expect(Array.isArray(args)).to.be.true;
    expect(args[0]).to.equal("cmd1");
  });

  it("should look through subdirs to load", function () {
    let commandLoader = loader(finder(path.join(__dirname, "sample-commands")));
    let [command, commandParts, remainingArgs] = commandLoader(["subcommands", "cmd2"]);
    expect(command).to.be.a("function")
      .and.property("name", "Command2");
    expect(remainingArgs).to.deep.equal([]);
  });
});
