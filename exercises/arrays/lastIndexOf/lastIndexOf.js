/**
 * Given an array and a value, returns the index of the last occurence of
 * the value. If the value is not found, returns -1.
 *
 * The array doesn't need to contain a single type of data.
 *
 * @example
 * lastIndexOf([10, 20, 30, 20], 20); // => 3
 * lastIndexOf([10, 20, 30, 20], 17); // => -1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); // => 1
 * lastIndexOf(['giraffe', giraffe', 'banana'], 'banana'); // => 2
 *
 * @param {object[]} haystack - An array
 * @param {object} needle - The value to search for
 * @returns {boolean} The index of the last occurrence of the value in the
 *  array, or -1 if it's not found.
 */
function lastIndexOf(haystack, needle) { //this one is also not working and I can't figure out why
  let currentIndex = 0;

  for(let i = 0; i<haystack.length; i++){
    if(haystack[i]===needle){
      currentIndex+=1;
      console.log(currentIndex);
    }
  }

  if(currentIndex>0){
    return currentIndex;
  }

  else{
    return -1;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for lastIndexOf:');

  console.log(lastIndexOf([10, 20, 30, 20], 20)===3);
  console.log(lastIndexOf([10, 20, 30, 20], 17)===-1);
  console.log(lastIndexOf(['giraffe', 'giraffe', 'banana', 'giraffe'])===1);
  console.log(lastIndexOf(['giraffe', 'giraffe', 'banana', 'banana'])===2);
}

module.exports = lastIndexOf;
