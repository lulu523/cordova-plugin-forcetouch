var exec = require('cordova/exec');
var ForceTouch = function (){};
ForceTouch.prototype.getForceTouchData = function(onData) { exec(onData, null, "ForceTouch", "getForceTouchData", []); };
module.exports = new ForceTouch();