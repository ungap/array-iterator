/*! (c) Andrea Giammarchi - ISC */
// requires a global Symbol
var iterator = [][Symbol.iterator] || /* istanbul ignore next */ function () {
  var i = 0;
  var self = this;
  return {
    next: function () {
      var done = self.length <= i;
      var value = done ? void 0 : self[i++];
      return {
        value: value,
        done: done
      };
    }
  };
};
