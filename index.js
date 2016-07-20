"use strict";
exports.FGS = [null, null, 'blue', 'green', 'red', 'grey'];
exports.BGS = [null, 'yellow', 'powderblue', 'palegreen', 'mistyrose', 'lightgrey'];
exports.FACES = ['serif', 'sans-serif', 'monospace'];
exports.SIZES = [null, 10, 13, 18, 24, 32];
(function (Formats) {
    Formats[Formats["UNKNOWN"] = 0] = "UNKNOWN";
    Formats[Formats["FMT2014"] = 20140] = "FMT2014";
    Formats[Formats["FMT2014A"] = 20141] = "FMT2014A";
    Formats[Formats["FMT2015"] = 20150] = "FMT2015";
})(exports.Formats || (exports.Formats = {}));
var Formats = exports.Formats;
(function (Perms) {
    Perms[Perms["None"] = 0] = "None";
    Perms[Perms["rw"] = 1] = "rw";
    Perms[Perms["ro"] = 2] = "ro";
})(exports.Perms || (exports.Perms = {}));
var Perms = exports.Perms;
(function (ForegroundColors) {
    ForegroundColors[ForegroundColors["black"] = 0] = "black";
    ForegroundColors[ForegroundColors["blue"] = 2] = "blue";
    ForegroundColors[ForegroundColors["green"] = 3] = "green";
    ForegroundColors[ForegroundColors["red"] = 4] = "red";
    ForegroundColors[ForegroundColors["gray"] = 5] = "gray";
})(exports.ForegroundColors || (exports.ForegroundColors = {}));
var ForegroundColors = exports.ForegroundColors;
(function (BackgroundColors) {
    BackgroundColors[BackgroundColors["yellow"] = 1] = "yellow";
    BackgroundColors[BackgroundColors["powderblue"] = 2] = "powderblue";
    BackgroundColors[BackgroundColors["palegreen"] = 3] = "palegreen";
    BackgroundColors[BackgroundColors["mistyrose"] = 4] = "mistyrose";
    BackgroundColors[BackgroundColors["lightgray"] = 5] = "lightgray";
})(exports.BackgroundColors || (exports.BackgroundColors = {}));
var BackgroundColors = exports.BackgroundColors;
