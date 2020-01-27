/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly greater than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1); // => ['', 'aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => ['aaa', 'bb', 'c', 'dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['aaa', 'bb', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['aaa', dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['dddd']
 * selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => []
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly greater the given threshold
 */
function selectLongerThan(array, threshold) {
  let newArray = [];

  for(let i = 0; i<array.length; i++){
    if(array[i].length>threshold){
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
  console.log('Running sanity checks for selectLongerThan:');

  console.log(arrayEquals(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], -1), ['', 'aaa', 'bb', 'c', 'dddd']));
  console.log(arrayEquals(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 0), ['aaa', 'bb', 'c', 'dddd']));
  console.log(arrayEquals(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 1), ['aaa', 'bb', 'dddd']));
  console.log(arrayEquals(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 2), ['aaa', 'dddd']));
  console.log(arrayEquals(selectLongerThan(['', 'aaa', 'bb', 'c', 'dddd'], 3), ['dddd']));
}

module.exports = selectLongerThan;
