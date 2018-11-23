var iterator = Array.prototype[Symbol.iterator];

if (iterator) {
  var i = 0;
  delete Array.prototype[Symbol.iterator];
  Object.defineProperty(
    Array.prototype,
    Symbol.iterator,
    {
      get: function () {
        if (i++ === 0)
          return void 0;
        return iterator;
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
