/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rotN(string, n) {
  let charCodeA = 'A'.charCodeAt(0);
  string = string.toUpperCase();
  let code = "";
  for(let i = 0; i<string.length; i++){

    if(string.charCodeAt(i)<65 || string.charCodeAt(i)>90){
      code = code + string.charAt(i);
      continue;
    } 

    let newCharCode = string.charCodeAt(i) + n;

    code = code + String.fromCharCode(65 + (newCharCode - charCodeA) % 26);
  }

  return code.toLowerCase();
}



if (require.main === module) {
  console.log('Running sanity checks for rotN:');
  console.log(rotN('Hello, world!', 13));

  console.log(rotN('Hello, world!', 13)==='uryyb, jbeyq!');

  console.log(rotN('Hello, world!', 9));
  console.log(rotN('Hello, world!', 9)==='qnuux, fxaum!');
}

module.exports = rotN;
