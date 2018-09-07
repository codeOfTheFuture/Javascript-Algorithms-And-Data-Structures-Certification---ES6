function printManyTimes(str) {
  'use strict'

  // Change code below this line

  const   SENTENCE = str + ' is cool!';
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Change code above this line
}

printManyTimes('freeCodeCamp');