/**
 * Given two non-negative integers, `n` and `b`, return `true` of `n` is a power of `b`
 * and `false` otherwise.
 *
 * A number is a `n` power of `b` if it can be written as `b**k` for some positive integer `k`,
 * where "`**`" represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `9` is not a power of `2` since there's no integer `k` such that `9 === 2**k`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} n - The number
 * @param {number} b - The base
 * @returns {boolean} True if the number is a power of the base, false otherwise.
 */
function isPowerOf(n, b) {
  if(n===1 || b===0){
    return true;
  }

  if(n%2===1 && b%2===0){
    return false;
  }
  
  let multiple = 1;

  while(multiple<n){
    multiple*=b;
  }

  if(multiple===n){
    return true;
  }

  return false;
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOf:');

  // Is 0 a power of two? Is 1?
  console.log(isPowerOf(0, 2) === false);
  console.log(isPowerOf(1, 2) === true);

  console.log(isPowerOf(2, 2) === true);
  console.log(isPowerOf(3, 3) === true);
  console.log(isPowerOf(10, 2) === false);
  console.log(isPowerOf(8, 2) === true);
  console.log(isPowerOf(9, 3) === true);
  console.log(isPowerOf(30, 3) === false);
  console.log(isPowerOf(5, 0) === true);
}

module.exports = isPowerOf;
