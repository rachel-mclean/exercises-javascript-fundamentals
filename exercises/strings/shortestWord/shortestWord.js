/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  let words = string.split(" ");
  let shortest = words[0];
  for(let i = 0; i<words.length; i++){
    if(words[i].length<=shortest.length){
      shortest = words[i];
    }
  }
  return shortest;
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  console.log(shortestWord("Adjacent is awesome")==="is");
  console.log(shortestWord("dog cat tiger bear lion")==="cat");
  console.log(shortestWord("One two three four five six seven")==="six");
  console.log(shortestWord("Adjacent")==="Adjacent");
}

module.exports = shortestWord;
