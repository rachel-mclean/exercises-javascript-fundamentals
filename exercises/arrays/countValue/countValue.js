/**
 * Given an array and a value, return the number of times that value is found
 * in the array.
 *
 * @example
 * countValue([1, 2, 3, 4, 5], 2); // => 1
 * countValue([1, 2, 3, 4, 5], 17); // => 0
 * countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 4
 * countValue([10, 10, 10, -10], 10); // => 3
 * countValue(['hello', bananas', 'hello'], 'hello'); // => 2
 * countValue(['hello', bananas', 'hello'], 'giraffe'); // => 0
 *
 * @param {object[]} array - An array
 * @param {object} - A value to count
 * @returns {number} The number of times the value appears in the array
 */
function countValue(array, value) {
  let count = 0;
  for(let element of array){
    if(element===value){
      count++;
    }
  }
}

if (require.main === module) {
  console.log('Running sanity checks for countValue:');

  console.log(countValue([1, 2, 3, 4, 5], 2)===1);
  console.log(countValue([1, 2, 3, 4, 5], 17)===0);
  console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)===4);
  countValue([10, 10, 10, -10], 10); // => 3
  //countValue(['hello', bananas', 'hello'], 'hello'); // => 2
  //countValue(['hello', bananas', 'hello'], 'giraffe'); // => 0
}

module.exports = countValue;
