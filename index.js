var dick = (function() {
  "use strict";

  function Chainy(lib) {
    return function(value) {
      var self = Object.create(null);
      var objectType = typeof(value);
      var lastValue = value;
      var key, func;

      function buildFunction(key, func) {
        return function() {
          var args = Array.prototype.slice.call(arguments); // Cast arguments into array
          if (lastValue) {
            args.unshift(lastValue);
          }
          var newValue = func.apply(lib, args);
          if (newValue) {
            lastValue = newValue;
          }

          return newValue !== undefined && typeof(newValue) !== objectType ? newValue : self;
        };
      }

      // Bind chainability
      for (key in lib) {
        if (lib.hasOwnProperty(key)) {
          self[key] = buildFunction(key, lib[key]);
        }
      }

      self.ret = function ret() {
        return lastValue;
      };

      return self;
    };
  }

  return {
    Chainy: Chainy
  };
}());

module.exports = dick;
