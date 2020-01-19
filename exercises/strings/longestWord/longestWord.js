/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  let words = string.split(" ");
  let longest = words[0];
  for(let i = 0; i<words.length; i++){
    if(words[i].length>=longest.length){
      longest = words[i];
    }
  }
  return longest;
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  console.log(longestWord("Adjacent is awesome")==="Adjacent");
  console.log(longestWord("dog cat tiger bear lion")==="tiger");
  console.log(longestWord("One two three four five sixe seven")==="seven");
  console.log(longestWord("Adjacent")==="Adjacent");
}

module.exports = longestWord;
