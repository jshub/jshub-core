/**
 * Alias console wrapper for logging.
 * @module hub
 * @for jsHub
 *//*--------------------------------------------------------------------------*/
// TODO: Enable sending of logging data to remote servers

// JSLint options
/*global jsHub */
"use strict";

(function () {

  jsHub.logger = (function () {
    var level = 9; // jsHub.configure('logger.level');
    if (level && level >= 1) {
      return window.debug;
    } else {
      var i, nullLogger = {}, doNothing = function () {},
        names = ["log", "debug", "info", "warn", "error", "assert", "dir", 
		  "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", 
		  "profile", "profileEnd"];
      for (i = 0; i < names.length; ++i) {
        nullLogger[names[i]] = function () {
          // logger just swallows output
          // we don't really need this closure but jslint insists on it
          return doNothing;
        }(i);
      }
  	  return nullLogger;
    }
  })();

})();
