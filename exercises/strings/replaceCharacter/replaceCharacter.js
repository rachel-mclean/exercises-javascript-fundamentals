/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  for(let i = 0; i<string.length; i++){
    if(string.slice(i,i+1)===target){
      string = string.slice(0, i) + replaceWith + string.slice(i+1);
    }
  }
  return string;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  console.log(replaceCharacter('hello', 'l', '8')==="he88o");
  console.log(replaceCharacter('Saturday', 'a', '4')==="S4turd4y");
  console.log(replaceCharacter('hello', 'i', '8')==="hello");
  console.log(replaceCharacter('nice to meet you', " ", '-')==="nice-to-meet-you");
  console.log(replaceCharacter('o', 'o', 'k')==="k");
  console.log(replaceCharacter(" ", " ", '1')==="1");
  console.log(replaceCharacter('10001', '1', '2')==="20002");
}

module.exports = replaceCharacter;
