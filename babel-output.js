"use strict";

var add = function add() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var arr = [].concat(args);
  var sum = 0;
  arr.forEach(function (n) {
    sum += n;
    console.log(sum);
  });
  return sum;
};

console.log(add(1, 2, 2));
