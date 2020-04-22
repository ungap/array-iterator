var Symbol = global.Symbol;
global.Symbol = {};
var iterator = require('../cjs');
global.Symbol = Symbol;
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
