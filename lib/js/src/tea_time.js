// Generated by BUCKLESCRIPT VERSION 1.7.5, PLEASE EDIT WITH CARE
'use strict';

var Block      = require("bs-platform/lib/js/block.js");
var Curry      = require("bs-platform/lib/js/curry.js");
var Tea_sub    = require("./tea_sub.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Web_window = require("./web_window.js");

function every(interval, tagger) {
  var key = Pervasives.string_of_float(interval);
  var enableCall = function (callbacks) {
    var id = Web_window.$$setInterval((function () {
            return Curry._1(callbacks[/* enqueue */0], Curry._1(tagger, Date.now()));
          }), interval);
    return (function () {
        return window.clearTimeout(id);
      });
  };
  return Tea_sub.registration(key, enableCall);
}

function delay(msTime, msg) {
  return /* EnqueueCall */Block.__(2, [(function (callbacks) {
                Web_window.$$setTimeout((function () {
                        return Curry._1(callbacks[0][/* enqueue */0], msg);
                      }), msTime);
                return /* () */0;
              })]);
}

var second = 1000.0 * 1.0;

var minute = 60.0 * second;

var hour = 60.0 * minute;

function inMilliseconds(t) {
  return t;
}

function inSeconds(t) {
  return t / second;
}

function inMinutes(t) {
  return t / minute;
}

function inHours(t) {
  return t / hour;
}

var millisecond = 1.0;

exports.every          = every;
exports.delay          = delay;
exports.millisecond    = millisecond;
exports.second         = second;
exports.minute         = minute;
exports.hour           = hour;
exports.inMilliseconds = inMilliseconds;
exports.inSeconds      = inSeconds;
exports.inMinutes      = inMinutes;
exports.inHours        = inHours;
/* No side effect */
