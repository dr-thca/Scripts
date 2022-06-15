"use strict";
exports.__esModule = true;
var readline = require("node:readline");
var node_process_1 = require("node:process");
function getDateObjectWithInterval(_a) {
    var start = _a.start, end = _a.end;
    return new Date(end.getTime() - start.getTime());
}
function turnStringIntoDate(input) {
    var _a = input.split(":"), hour = _a[0], minutes = _a[1];
    var hoursInSeconds = parseInt(hour) * 60 * 60;
    var minutesInSeconds = parseInt(minutes) * 60;
    var x = new Date(0);
    x.setUTCSeconds(hoursInSeconds + minutesInSeconds);
    return x;
}
function dateToString(date) {
    return "".concat(date.getUTCHours(), ":").concat(date.getMinutes());
}
function turnInputIntoTwoDates(input) {
    var _a = input.split(" ").map(turnStringIntoDate), start = _a[0], end = _a[1];
    return { start: start, end: end };
}
var _a = process.argv.slice(2), start = _a[0], end = _a[1];
if (start == undefined && end == undefined) {
    var rl_1 = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    rl_1.question('HH:MM HH:MM> ', function (answer) {
        var twodates = turnInputIntoTwoDates(answer);
        var interval = getDateObjectWithInterval(twodates);
        console.log(dateToString(interval));
        rl_1.close();
    });
}
else {
    var interval = getDateObjectWithInterval({
        start: turnStringIntoDate(start),
        end: turnStringIntoDate(end)
    });
    console.log(dateToString(interval));
}
