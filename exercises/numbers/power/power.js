/**
 * Given a base and an positive integer exponent, returns the base raised to the power of the exopnent.
 *
 * @example
 *   power(2, 3) // => 8 (i.e., 2 * 2 * 2)
 *   power(-2, 3) // => -4 (i.e., -2 * -2 * -2)
 *   power(5, 6) // => 15625 (i.e., 5 * 5 * 5 * 5 * 5 * 6)
 *
 * @param {number} base The base
 * @param {number} exponent The exponent (a positive integer)
 * @returns {number} The base raised to the power of the exopnent
 */


function power(base, exponent) {
//the commented-out code below works, 
//but it is basically just Math.pow, so I tried another way too
//return base**exponent;

  if(exponent===0){
    return 1;
  }
  if(base===0){
    return 0;
  }

  let current=1;
  for(let i = 1; i<=exponent; i++){
    current*=base;
  }
  return current;
}



if (require.main === module) {
  console.log('Running sanity checks for power:');

  console.log(power(1, 1) === 1);
  console.log(power(1, 2) === 1);

  console.log(power(-1, 1) === -1);
  console.log(power(-1, 2) === 1);
  console.log(power(-1, 3) === -1);

  console.log("Checking 0:");
  console.log(power(0, 0) === 1);
  console.log(power(0, 1) === 0);
  console.log(power(1, 0) === 1);

}

module.exports = power;
