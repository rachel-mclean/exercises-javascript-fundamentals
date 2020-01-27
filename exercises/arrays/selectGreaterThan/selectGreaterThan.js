/**
 * Given an array of numbers and a treshold value, returns a new array
 * consisting of only those numbers strictly greater than the threshold.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectGreaterThan([1, 2, 3, 4, 5], 2); // => [3, 4, 5]
 * selectGreaterThan([1, 2, 3, 4, 5], 17); // => []
 * selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => [2, 2, 3, 4, 2];
 * selectGreaterThan([10, 10, 10, -10, 15], 10); // => [15]
 * selectGreaterThan([10, 20, 30, 40], 100); // => []
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for selecting
 * @returns {number[]} A new array consisting of all the numbers in input array
 *  strictly greater than the threshold
 */
function selectGreaterThan(array, threshold) {//I can't figure out my mistake here
  let newArray = [];

  for(let i = 0; i<array.length; i++){
    if(array[i]>threshold){
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
  console.log('Running sanity checks for selectGreaterThan:');

  //check that arrayEquals is working
  console.log(arrayEquals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

  //new checks for selectGreaterThan
  console.log(arrayEquals(selectGreaterThan([1, 2, 3, 4, 5], 2), [3, 4, 5]));
  console.log(arrayEquals(selectGreaterThan([1, 2, 3, 4, 5], 17), []));
  console.log(arrayEquals(selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1), [2, 2, 3, 4, 2]));
  console.log(arrayEquals(selectGreaterThan([10, 10, 10, -10, 15], 10), [15]));
  console.log(arrayEquals(selectGreaterThan([10, 20, 30, 40], 100), []));


  // console.log(selectGreaterThan([1, 2, 3, 4, 5], 2)===[3, 4, 5]);
  // console.log(selectGreaterThan([1, 2, 3, 4, 5], 17)===[]);
  // console.log(selectGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)===[2, 2, 3, 4, 2]);
  // console.log(selectGreaterThan([10, 10, 10, -10, 15], 10)===[15]);
  // console.log(selectGreaterThan([10, 20, 30, 40], 100)===[]);
}

module.exports = selectGreaterThan;
