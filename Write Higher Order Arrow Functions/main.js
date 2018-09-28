const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  'use strict';
  // Change code below this line
  const positiveIntegers = (num) => num > 0;
  const wholeNumbers = (num) => Number.isInteger(num);
  const squareNumbers = (num) => Math.pow(num, 2);

  const squareIntegers = arr.filter(positiveIntegers).filter(wholeNumbers).map(squareNumbers);
  console.log(squareIntegers)
  // Change code above this line

  return squareIntegers;
};
// Test your code
const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);




