const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  'use strict';
  // Change code below this line
  
  const {tomorrow: tempOfTomorrow} = AVG_TEMPERATURES;  // Change this line
  
  // Change code above this line
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));