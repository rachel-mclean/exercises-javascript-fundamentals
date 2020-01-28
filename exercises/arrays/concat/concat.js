/**
 * Given two arrays, returns a new array that is a concatenation of the
 * two given arrays.
 *
 * "Concatenation" means the two arrays are joined or glued together, end-to-end.
 *
 * JavaScript array's have a built-in concatenation method. Don't use it!
 * The goal is to better understand how concatenation works, not navigate
 * the JavaScript documentation.
 *
 * See https://en.wikipedia.org/wiki/Concatenation
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
 * concat([-10, undefined], [true, 'waffles']); // => [-10, undefined, true, 'waffles']
 * concat([], []); // => []
 * concat([20, 104], []); // => [20, 104]
 * concat([], ['hello', 'world']); // => ['hello', 'world']
 *
 * @param {object[]} leftArray - The left array to concatenate
 * @param {object[]} rightArray - The right array to concatenate
 * @returns {object[]} The concatenation of the two given arrays
 */
function concat(leftArray, rightArray) {
  let concatenation = leftArray;

  for(let i = 0; i<rightArray.length; i++){
    concatenation.push(rightArray[i]);
  }

  return concatenation;
}

function arrayEquals(array1, array2){
  if(array1.length!==array2.length){
    return false;
  }
  for(let i = 0; i<array1.length; i++){
    if (array1[i]!==array2[i]){
      return false;
    }
  }

  return true;
} 

if (require.main === module) {
  console.log('Running sanity checks for concat:');

  console.log(arrayEquals(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]));
  console.log(arrayEquals(concat([-10, undefined], [true, 'waffles']), [-10, undefined, true, 'waffles']));
  console.log(arrayEquals(concat([], []), []));
  console.log(arrayEquals(concat([20, 104], []), [20, 104]));
  console.log(arrayEquals(concat([], ['hello', 'world']), ['hello', 'world']));
}

module.exports = concat;
