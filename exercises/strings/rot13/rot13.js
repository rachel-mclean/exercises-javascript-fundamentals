/**
 * Given an input string, returns a ROT13 copy of the string.
 *
 * A substitution cipher is a method of encrypting an input string
 * by replacing each letter of the input with some other letter.
 *
 * ROT13 is a substitution cipher where each letter is replaced by
 * the letter that is 13 letters after it in the alphabet, wrapping
 * back to the start of the alphabet if necessary.
 *
 * For example, every instance of 'A' is replaced with 'N', 'M' with 'Z',
 * 'R' with 'E', and so on.
 *
 * See https://en.wikipedia.org/wiki/ROT13
 *
 * Play with: https://rot13.com/
 *
 * Because there are 26 letters in the alphabet, we can "decrypt" a
 * rot13-encrypted string by applying rot13 again.
 *
 * (No, this isn't particularly secure.)
 *
 * @example
 * rot13('Hello, world!'); // => 'Uryyb, jbeyq!'
 * rot13('Uryyb, jbeyq!'); // => 'Hello, world!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rot13(string) {
  let rot13Dict = {'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w',
              'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c', 'q':'d', 'r': 'e', 's': 'f', 't': 'g', 
              'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l', 'z': 'm'};
  string = string.toLowerCase();

  for(let i = 0; i<string.length;i++){
    let character = string.charAt(i);
    if(rot13Dict.hasOwnProperty(character)){
      string = string.slice(0, i) + rot13Dict[character] + string.slice(i+1);
    }
  }

  return string;
}

if (require.main === module) {
  console.log('Running sanity checks for rot13:');

  console.log(rot13('a')==='n');
  console.log(rot13('Zora')==='mben');
  console.log(rot13('Hello, world!')==='uryyb, jbeyq!');
  console.log(rot13('Uryyb, jbeyq!')==='hello, world!'); //in the documentation at the top it says to return a 
                                                        //lowercase version, but in your examples at the top some 
                                                        //of the letters were still capitalized. I just had my code
                                                        // return lowercase because I couldn't figure out how 
                                                        // to keep the uppercase in the correct spot each time, but
                                                        // I can come back to this if you would like.
                                                        
                                                        
}

module.exports = rot13;
