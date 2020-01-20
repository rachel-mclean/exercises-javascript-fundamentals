/**
 * Given an input string, returns a copy of the string with all-lowercase letters.
 *
 * Don't use JavaScript's built-in string.toLowerCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding lowercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toLowerCase('HelLo fRiends!'); // => 'hello friends!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toLowerCase(string) {
  
  let lowerCase = ""; 
  
  for(let i = 0; i<string.length; i++){
    let current = string.charCodeAt(i);

    if(current >= 65 && current<=90){
      lowerCase = lowerCase + String.fromCharCode(current+32);
    }

    else{
      lowerCase = lowerCase + string.charAt(i);
    }
  }

  return lowerCase;

}

if (require.main === module) {
  console.log('Running sanity checks for toLowerCase:');

  console.log(toLowerCase('HelLo fRiends!')==='hello friends!');
  console.log(toLowerCase('HELLO fRiends!')==='hello friends!');
  console.log(toLowerCase('ABCD')==='abcd');
  console.log(toLowerCase('abcd')==='abcd');

}

module.exports = toLowerCase;
