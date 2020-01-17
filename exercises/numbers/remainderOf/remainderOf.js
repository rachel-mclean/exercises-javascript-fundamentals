/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} n The input number
 * @param {number} d Input number
 * @returns {number} remainder after dividing by 'd'
 */
function remainderOf(n, d) {
  if(d===0){
    return "No division by 0";
  }
  
  let roundedDecimal = Math.floor(n/d);
  return n-(d*roundedDecimal);
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');

  console.log(remainderOf(91, 13)===0);
  console.log(remainderOf(0, 2)===0);
  console.log(remainderOf(2, 0)==="No division by 0");
  console.log(remainderOf(10, 2)===0);
  console.log(remainderOf(10, 3)===1);
  console.log(remainderOf(10, 4)===2);
  console.log(remainderOf(129, 17)===10);
}

module.exports = remainderOf;
