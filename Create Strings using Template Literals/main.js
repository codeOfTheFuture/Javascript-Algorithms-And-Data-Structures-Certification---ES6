const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['id-blacklist', 'no-dup-keys']
};
function makeList(arr) {
  'use strict';

  // Change code below this line
  const templeteListItem = (str) => `<li class='text-warning'>${str}</li>`;
  const resultDisplayArray = arr.map(templeteListItem);
  // Change code above this line

  return console.log(resultDisplayArray);
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
