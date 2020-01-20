/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  string = string.toLowerCase();
  
  let snake = "";

  for(let i = 0; i<string.length; i++){
    if(string.charAt(i)===" "){
      snake = snake + "_";
    }

    else{
      snake = snake + string.charAt(i);
    }
  }

  return snake;
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');

  console.log(toSnakeCase('HeLlo fRIENds')==='hello_friends');
  console.log(toSnakeCase('HELLO FRIENDS')==='hello_friends');
  console.log(toSnakeCase('HeLlo')==='hello');
  console.log(toSnakeCase('HELLO_FRIENDS')==='hello_friends');
}

module.exports = toSnakeCase;
