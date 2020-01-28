/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} a- one side of the triangle
 * @param {number} b- one side of the triangle
 * @param {number} c- one side of the triangle
 * @return {String}
 */
function triangleType(a, b, c) {
  if(!isValidTriangle(a, b, c)){
    return 'invalid';
  }

  if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
    || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2)){
    return 'right';
  }

  else if(Math.pow(a, 2) + Math.pow(b, 2) < Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) < Math.pow(a, 2)
  || Math.pow(a, 2) + Math.pow(c, 2) < Math.pow(b, 2)){
    return 'obtuse';
  }

  else{
    return 'acute'
  }

}

function isValidTriangle(a, b, c) {
  //sum of two sides must be greater than third side
  if(a<=0 || b<=0 || c<=0){
    return false;
  }

  if(a+b>c && b+c>a && c+a>b){
    return true;
  }

  else{
    return false;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');

  console.log(triangleType(3, 4, 5)==='right');
  console.log(triangleType(4, 3, 5)==='right');
  console.log(triangleType(1, 1, 1)==='acute');
  console.log(triangleType(12, 15, 8)==='obtuse');
  console.log(triangleType(1, 1, 3)==='invalid');
}

module.exports = triangleType;
