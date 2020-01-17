/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  let smallest = array[0];

  for(let i = 0; i<array.length; i++){
    if(array[i].length<=smallest.length){
      smallest = array[i];
    }
  }

  return smallest;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');

  console.log(shortest(["dog", "shark", "lion", "tiger"])==="dog");
  console.log(shortest(["elephant", "dog"])==="dog");
  console.log(shortest(["dog", "shark", "it"])==="it");
}


module.exports = shortest;
