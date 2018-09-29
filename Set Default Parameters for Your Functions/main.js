const increment = (function() {
  'use strict'
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5));