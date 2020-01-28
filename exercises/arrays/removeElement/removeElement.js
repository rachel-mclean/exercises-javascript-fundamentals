/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
  let newArray = [];

  for(let i = 0; i<array.length; i++){
    if(array[i]!==element){
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
  console.log('Running sanity checks for removeElement:');

  console.log(arrayEquals(removeElement([1, 1, 1], 1), []));
  console.log(arrayEquals(removeElement([1, 2, 1], 1), [2]));
  console.log(arrayEquals(removeElement(['one', 'two', 'three'], 'two'), ['one', 'three']));
  console.log(arrayEquals(removeElement(['Jesse', undefined, 'Farmer'], undefined), ['Jesse', 'Farmer']));
}

module.exports = removeElement;
