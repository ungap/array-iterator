var nativeIterator = Array.prototype[Symbol.iterator];

if (nativeIterator) {
  var i = 0;
  delete Array.prototype[Symbol.iterator];
  Object.defineProperty(
    Array.prototype,
    Symbol.iterator,
    {
      get: function () {
        return i++ === 3 ? void 0 : nativeIterator.bind(this);
      },
      set: function (value) {
        Object.defineProperty(this, Symbol.iterator, {value: value});
      }
    }
  );
}

var iterator = require('../cjs');
test();

function test() {
  var a = [1, 2];
  a[Symbol.iterator] = iterator;

  var walker = a[Symbol.iterator]();

  var obj = walker.next();
  console.assert(obj.done === false && obj.value === 1);
  obj = walker.next();
  console.assert(obj.done === false && obj.value === 2);
  obj = walker.next();
  console.assert(obj.done === true && obj.value === void 0);

}
