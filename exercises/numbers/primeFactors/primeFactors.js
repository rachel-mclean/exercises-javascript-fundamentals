/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */


 function primeFactors(num) {
  let factors = []
  for(let i = 1; i<=num; i++){
    if(num%i===0){
      factors.push(i);
    }
  }

  if(factors.length===2){
    return factors;
  }
}

if (require.main === module) {
  //console.log('Running sanity checks for primeFactors:');

  console.log('[1, 61]===', primeFactors(61));
  console.log('[1, 3]===', primeFactors(3));
} 

module.exports = primeFactors;
