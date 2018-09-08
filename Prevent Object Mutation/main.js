function freezeObj() {
  'use strict'
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Change code below this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();