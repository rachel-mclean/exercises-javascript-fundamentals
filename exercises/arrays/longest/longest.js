/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  let longest = array[0];

  for(let i = 0; i<array.length; i++){
    if(array[i].length>=longest.length){
      longest = array[i];
    }
  }

  return longest;
}

if (require.main === module) {
  console.log('Running sanity checks for longest:');

  console.log(longest(['dog', 'cat', 'shark', 'elephant'])==='elephant');
  console.log(longest(['one', 'seven', 'fourteen', 'one'])==='fourteen');
  
}

module.exports = longest;
