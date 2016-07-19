"use strict";
exports.FGS = [null, null, 'blue', 'green', 'red', 'grey'];
exports.BGS = [null, 'yellow', 'powderblue', 'palegreen', 'mistyrose', 'lightgrey'];
exports.FACES = ['serif', 'sans-serif', 'monospace'];
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
