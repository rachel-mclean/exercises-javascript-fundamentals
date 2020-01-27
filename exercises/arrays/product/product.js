/**
 * Given an array of numbers, return their product.
 *
 * @example
 * product([2, 4, 6]); // => 48 (i.e., 2 * 4 * 6)
 * product([-10, 10]); // => -100 (i.e., -10 * 10)
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The product of the numbers in the array
 */
function product(array) {
  let product = 1;
  for(let i = 0; i<array.length; i++){
    product *=array[i];
  }

  return product;
}

if (require.main === module) {
  console.log('Running sanity checks for product:');

  console.log(product([2, 4, 6])===48);
  console.log(product([-10, 10])===-100); 
}

module.exports = product;
