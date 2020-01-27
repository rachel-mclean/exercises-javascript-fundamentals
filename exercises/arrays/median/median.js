/**
 * Given an array of numbers, return their median. The mean of a list of numbers
 * is the value separating the higher half from the lower half.
 *
 * The median of [1, 2, 14, 199, 5] is 5 because half the numbers in the list are
 * smaller than 5 and half the numbers in the list are larger than 5.
 *
 * If the list has an odd number of elements then there will always be a "middle" value
 * in the list itself and that is taken to be the median. If the list has an even number
 * of elements then the median is taken to be the mean of the two middle elements.
 *
 * See https://en.wikipedia.org/wiki/Median
 *
 * @example
 * median([900, 10, 20]); // => 20 since 20 is the middle element
 * mean([-10, 20, 400, 10]); // => 15 since 10,20 are the middle selement
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The median of the numbers in the array
 */
function median(array) {

  array = array.sort();

  let length = array.length;

  if(length%2==1){
    return array[Math.floor(length/2)];
  }

  else{
     let median = (array[Math.floor(length/2)-1]+ array[Math.floor(length/2)])/2;
     return median;
  }
}


if (require.main === module) {
  console.log('Running sanity checks for median:');

  console.log(median([900, 10, 20])===20);
  console.log(median([-10, 20, 400, 10])===15);
  console.log(median([0, 1, 2, 3, 4])===2);
  console.log(median([0, 0, 1, 1])===.5);
  console.log(median([5])===5);
}

module.exports = median;
