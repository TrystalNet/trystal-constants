"use strict";
exports.FGS = [null, null, 'blue', 'green', 'red', 'grey'];
exports.BGS = [null, 'yellow', 'powderblue', 'palegreen', 'mistyrose', 'lightgrey'];
exports.FACES = ['serif', 'sans-serif', 'monospace'];
(function (Perms) {
    Perms[Perms["None"] = 0] = "None";
    Perms[Perms["rw"] = 1] = "rw";
    Perms[Perms["ro"] = 2] = "ro";
})(exports.Perms || (exports.Perms = {}));
var Perms = exports.Perms;
