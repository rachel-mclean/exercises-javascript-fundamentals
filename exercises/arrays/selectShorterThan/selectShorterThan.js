/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  let newArray = [];

  for(let i = 0; i<array.length; i++){
    if(array[i].length<threshold){
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
  console.log('Running sanity checks for selectShorterThan:');

  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0), []));
  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1), ['']));
  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2), ['', 'c']));
  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3), ['', 'bb', 'c']));
  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4), ['', 'aaa', 'bb', 'c']));
  console.log(arrayEquals(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5), ['', 'aaa', 'bb', 'c', 'dddd']));
}

module.exports = selectShorterThan;
