/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  let first = string.slice(0,1).toUpperCase();
  return first + string.slice(1);
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  console.log(capitalize("dog")==="Dog");
  console.log(capitalize("hello")==="Hello");
  console.log(capitalize("giraffe")==="Giraffe");
}

module.exports = capitalize;
