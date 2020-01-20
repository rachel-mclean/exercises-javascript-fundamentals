/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  let title = "";

  string = string.toLowerCase();

  //checks for non-alphabetic character in first character, makes upperCase
  if(string.charCodeAt(0)>=97 && string.charCodeAt(0)<=122){
    title = title + string.charAt(0).toUpperCase();
  }

  //otherwise if first character is non-alphabetic, adds to title
  else{
    title = title + string.charAt(0).toLowerCase;
  }

  //loops through string starting at 2nd character
  for(let i = 1; i<string.length-1; i++){
    let character = string.charAt(i);

    //checks if index before is a space & if index after is not a space (or a special character)
    //this means character needs to be capitalized
    if(string.charAt(i-1)===" " && string.charCodeAt(i+1)<=122 && string.charCodeAt(i+1)>=97){
      title = title + character.toUpperCase();
    }

    //checks if index before and after last character is a space
    else if(string.charAt(i-1)===" " && string.charAt(i+1)===" "){
      title = title + character.toUpperCase();
    }
    
    else{
      title = title + character;
    }
  }

  last = string.length-1;

  //checks if last character is not a special character & if index before last character is a space
  //this means character needs to be capitalized
  if(string.charCodeAt(last)>=97 && string.charCodeAt(last)<=122 && string.charAt(last-1)===" "){
    title = title + string.charAt(last).toUpperCase();
  }
  

  else {
    title = title + string.charAt(last);
  }

  return title;
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');

  console.log(toTitleCase('wElCoMe to THE wILD wiLD WEST!')==='Welcome To The Wild Wild West!');
  console.log(toTitleCase('welcome to the wild wild west!')==='Welcome To The Wild Wild West!');
  console.log(toTitleCase('tHe quEEN and i')==='The Queen And I');
  console.log(toTitleCase('a b c d e f')==='A B C D E F');
  console.log(toTitleCase("it's a beaUTIFul Day.")==="It's A Beautiful Day.");

}

module.exports = toTitleCase;
