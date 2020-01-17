/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('Mississippi', 's'));
  console.log(countLetter('a', 'a')===1)
}

module.exports = countLetter;
