/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  if(string==="" || string===" "){
    return 0;
  }
  return string.split(" ").length;
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  console.log(countWords('Adjacent is awesome')===3);
  console.log(countWords('dog cat tiger bear lion')===5);
  console.log(countWords("")===0);
  console.log(countWords(" ")===0);
  console.log(countWords('Adjacent')===1);
}

module.exports = countWords;
