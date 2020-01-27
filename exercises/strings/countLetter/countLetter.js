/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  letter = letter.toUpperCase();
  let count = 0;
  for(let i = 0; i<string.length; i++){
    if(string.slice(i, i+1).toUpperCase()===letter){
        count++;
    }
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('Mississippi', 's')===4);
  console.log(countLetter('a', 'a')===1);
  console.log(countLetter("u", "a")===0);
  console.log(countLetter("hello world!!", "l")===3);
}


module.exports = countLetter;
