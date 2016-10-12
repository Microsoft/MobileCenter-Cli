// Functions to support outputting stuff to the user
const debug = require("debug")("sonoma-cli:util:interaction:out");
import { inspect } from "util";

// TODO: Support format setting, debug flag
import { isDebug, formatIsJson } from "./io-options";

import * as os from "os";
import * as wrap from "wordwrap";

const Spinner = require("cli-spinner").Spinner;

//
// Display a progress spinner while waiting for the provided promise
// to complete.
//
export function progress<T>(title: string, action: Promise<T>): Promise<T> {
  if (!formatIsJson()) {
    const spinner = new Spinner(title);
    spinner.start();
    return action.then(result => {
      spinner.stop(true);
      return result;
    })
    .catch(ex => {
      spinner.stop(true);
      throw ex;
    });
  }  else {
    return action;
  }
}

//
// Output an array of items, passing each item through a formatting
// function.
//
export function list<T>(formatter: {(item: T): string}, items: T[]): void {
  if (!formatIsJson()) {
    items.map(formatter).forEach(text => console.log(text));
  } else {
    console.log(JSON.stringify(items));
  }
}

//
// Export a line of help text
//
export function help(t: string): void;
export function help(): void;
export function help(...args: any[]) : void
{
  let t: string;
  if (args.length === 0) {
    t = "";
  } else {
    t = args[0];
  }
  console.log(t);
}

//
// Export a line of plain text.
//
export function text(t: string): void {
  if (!formatIsJson()) {
    console.log(t);
  }
}

//
// Output a "report", which is a formatted output of a single object
// with ability to control naming of fields in the output, lets you
// output subobjects formatted nicely, and aligns everything for you.
//
// Usage looks like:
//  out.report([
//    // Report format here, one array entry per field to output
//    [ "Field name to display", "path.to.property.to.display.in.data", optionalFormatter ],
//    [ "Second field name", "second.path.to.display", /* No formatter on this one */ ]
//  ],
//  "Optional string to print if no data is available",
//  theDataToFormat);
//
// The paths to properties are simple dotted property names like you'd use in javascript.
// For example, in the profile list command, there's this line to display some of the
// current profile properties:
//
//   out.report([
//       ["Username", "userName" ],
//       [ "Display Name", "displayName" ],
//       [ "Email", "email"]
//     ], "No logged in user. Use 'sonoma login' command to log in.",
//     user);
//
// "userName", "displayName", and "email" are names of properties on the user object being
// passed in. If there were subobjects, for example if the input object looked like this:
//
//   let user = {
//     name: {
//       userName: "chris",
//       displayName: "christav"
//     },
//     email: "not.giving@real.email.here"
//    };
//
// This format could be displayed in a report like so:
//
//   out.report([
//       [ "Username", "name.userName" ],
//       [ "Display Name", "name.displayName" ],
//       [ "Email", "email"]
//     ], "No logged in user. Use 'sonoma login' command to log in.",
//     user);
//
// Each report format entry can have a formatter supplied with it. This is a function that
// takes the field's value and returns the appropriate string for display. By default
// report just calls 'toString' on the value, but you can use a formatter to customize
// to whatever you like.
//
// There are a few supplied formatters you can use out of the box attached to the report
// function. They are:
//
//   out.report.asDate: takes an input string, parses it as a Date object, then outputs the result.
//   out.report.inspect: takes any input object and returns the result of calling util.inspect on it.
//   out.report.allProperties: Takes an object with properties itself, and runs report
//                             recursively on that object. This results in a nicely indented subreport
//                             in the final output.
//
// In addition, if the formatter is itself an array, it becomes the report format for the subobjects.
// So you can nest arbitrary reports. For exmaple, asssuming the same user field, then using this:
//
//   out.report(
//     [
//       [ "Email", "email" ],
//       // Nested subobject
//       [ "Names", "name",
//         [
//           // report format for each of the subobject's fields
//           [ "User Name", "userName" ],
//           [ "Display Name", "displayName" ]
//         ]
//       ]
//     ],
//     {
//       // reformat our user to show subobjects
//       name: {
//         displayName: user.displayName,
//         userName: user.userName
//       },
//       email: user.email
//     });
//
// The resulting output looks like this:
//
//   Email: ctavares@microsoft.com
//   Names:
//          User Name:    christav-yngr
//          Display Name: christav
//

//
// Support functions for "report" output
//
function spaces(num: number): string {
  if (num > 0) {
    return new Array(num + 1).join(" ");
  }
  return "";
}

function toWidth(s: string, width: number): string {
  var pad = width - s.length;
  return s + spaces(pad);
}

function defaultFormat(data: any): string {
  if (typeof data === "undefined" || data === null) {
    return "";
  }
  if (data instanceof Array) {
    if (data.length === 0) {
      return "[]";
    }
    return data.join(", ");
  }

  return data.toString();
}

function getProperty(value: any, propertyName: string): any {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  if (!propertyName) {
    return value;
  }

  var first = propertyName.split('.')[0];
  var rest = propertyName.slice(first.length + 1);
  return getProperty(value[first], rest);
}

function doReport(indentation: number, reportFormat: any[], data: any, outfn: {(message: string): void}): void {
  if (reportFormat.length === 0) {
    return;
  }

  var maxWidth = 80;
  if ((<any>process.stdout).isTTY) {
    maxWidth = (<any>process.stdout).columns;
  }

  var headerWidth = Math.max.apply(null,
    reportFormat.map(function (item) { return item[0].length; })
    ) + 2;

  reportFormat.forEach(function (item) {
    var title = item[0] + ":";
    var field = item[1];
    var formatter = item[2] || defaultFormat;

    var value = getProperty(data, field);
    if (formatter instanceof Array) {
      outfn(spaces(indentation) + toWidth(title, headerWidth));
      doReport(indentation + headerWidth, formatter, value, outfn);
    } else {
      var leftIndentation = "verbose: ".length + indentation + headerWidth;
      var formatted = wrap.hard(leftIndentation, maxWidth)(formatter(value));
      formatted = spaces(indentation) + toWidth(title, headerWidth) +
        formatted.slice(leftIndentation);
      outfn(formatted);
    }
  });
}

interface ReportFunc {
  (reportFormat: any, nullMessage: string, data:any): void;
  (reportFormat: any, data: any): void;
  allProperties: {(data: any): string };
  asDate: {(data: any): string };
  inspect: {(data: any): string };
};

function makeReport(reportFormat: any, nullMessage: string, data:any): void;
function makeReport(reportFormat: any, data: any): void;
function makeReport(...args: any[]): void {
  let reportFormat: any;
  let nullMessage: string;
  let data: any;

  if (args.length === 3) {
    [reportFormat, nullMessage, data] = args;
  } else {
    [reportFormat, data] = args;
    nullMessage = "No data available";
  }

  if (!formatIsJson()) {
    if (data === null || data === undefined) {
      console.log(nullMessage);
    } else {
      doReport(0, reportFormat, data, console.log);
    }
  } else {
     console.log(JSON.stringify(data));
  }
}

export const report = <ReportFunc> makeReport;

report.allProperties = function (data: any): any {
  if (typeof data === "undefined" || data === null || data === "") {
    return "[]";
  }
  var subreport = Object.keys(data).map(function (key) {
    return [key, key];
  });
  var result: string[] = [];
  doReport(0, subreport, data, function (o) { result.push(o); });
  result.push("");
  return result.join(os.EOL);
};

report.asDate = function (data: any): string {
  return new Date(Date.parse(data)).toString();
};

report.inspect = function (data: any): string {
  return inspect(data, {depth: null});
};
