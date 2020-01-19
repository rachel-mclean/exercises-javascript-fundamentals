/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  for(let i = 0; i<string.length;i++){
    let character = string.slice(i, i+1);
      if(character in replacementDict){
        string = string.slice(0, i) + replacementDict[character] + string.slice(i+1);
        //console.log(string);
      }
  }
  return string;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  console.log(replaceCharacters("000001111", {"0": "1", "1": "0"})=== "111110000");
  console.log(replaceCharacters('hello', {'h': 'y', 'l': '8'})==="ye88o");
  console.log(replaceCharacters('hello', {'a': 'y', 'u': '8'})==="hello");
  console.log(replaceCharacters('hello', {'h': 'y', 'u': '8'})==="yello");
  console.log(replaceCharacters(" ", {" ": 'y', 'l': '8'})==="y");
  console.log(replaceCharacters("100001", {'1': '3', '0': '4'})==="344443");
  console.log(replaceCharacters('hello', {'h': 'y', 'l': '1', 'e' : 3})==="y311o");
}

module.exports = replaceCharacters;
