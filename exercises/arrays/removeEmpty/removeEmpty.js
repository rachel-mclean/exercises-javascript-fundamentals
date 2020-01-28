/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  let newArray = [];
  for(let i = 0; i<array.length; i++){
    if(array[i]!==null && array[i]!==undefined && array[i]!==''){
      newArray.push(array[i]);
    }
  }

  return newArray;
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
  console.log('Running sanity checks for removeEmpty:');

  console.log(arrayEquals(removeEmpty([null, '', '']), []));
  console.log(arrayEquals(removeEmpty(['Jesse', undefined, 'Farmer']), ['Jesse', 'Farmer']));
  console.log(arrayEquals(removeEmpty(['one', '', 'two', '', 'three']), ['one', 'two', 'three']));
}

module.exports = removeEmpty;
