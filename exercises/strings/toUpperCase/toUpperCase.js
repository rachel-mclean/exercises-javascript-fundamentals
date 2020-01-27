/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  
  let upperCase = ""; 
  
  for(let i = 0; i<string.length; i++){
    let current = string.charCodeAt(i);

    if(current >= 97 && current<=122){
      upperCase = upperCase + String.fromCharCode(current-32);
    }

    else{
      upperCase = upperCase + string.charAt(i);
    }
  }

  return upperCase;

}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');

  console.log(toUpperCase('HelLo fRiends!')==='HELLO FRIENDS!');
  console.log(toUpperCase('HELLO fRiends!')==='HELLO FRIENDS!');
  console.log(toUpperCase('aBCD')==='ABCD');
  console.log(toUpperCase('ABCD')==='ABCD');

}

module.exports = toUpperCase;
