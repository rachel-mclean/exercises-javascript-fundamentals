/**
 * Given an array of numbers, return their sum.
 *
 * @example
 * sum([1, 2, 3]); // => 6 (i.e., 1 + 2 + 3)
 * sum([-10, 10]); // => 0 (i.e., -10 + 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum of the numbers in the array
 */
function sum(array) {
  let sum = 0;
  for(let i = 0; i<array.length;i++){
    sum+=array[i];
  }

  return sum;
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');

  console.log(sum([1, 2, 3])===6);
  console.log(sum([-10, 10])=== 0);
  console.log(sum([-1, 0, -1])===-2);
  console.log(sum([0, 0, 0])===0);
}

module.exports = sum;
