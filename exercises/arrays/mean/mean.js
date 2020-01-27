/**
 * Given an array of numbers, return their mean. We use "mean" instead of
 * average because "average" can mean many things — mean, median, or mode —
 * while mean only ever means one thing.
 *
 * The mean of three numbers a,b,c is (a + b + c) / 3.
 *
 * The mean of four numbers a,b,c,d is (a + b + c + d) / 4.
 *
 * etc.
 *
 * See https://en.wikipedia.org/wiki/Arithmetic_mean
 *
 * @example
 * mean([30, 10, 20]); // => 20 (i.e., (30 + 10 + 20) / 3)
 * mean([-10, 10]); // => 0 (i.e., (-10 + 10) / 2)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The mean of the numbers in the array
 */
function mean(array) {
  let sum = 0;
  for(let i = 0; i<array.length; i++){
    sum += array[i];
  }

  return sum/array.length;
}

if (require.main === module) {
  console.log('Running sanity checks for mean:');

  console.log(mean([30, 10, 20])===20);
  console.log(mean([-10, 10])===0);
  console.log(mean([5, 5, 5])===5);
}

module.exports = mean;
