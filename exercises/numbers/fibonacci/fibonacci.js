/**
 * Given a non-negative integer n, returns the n-th Fibonacci numbers.
 *
 * The Fibonacci numbers are defined thus:
 *
 * fib(n): 0  1  1  2  3  5  8  13  21  34  55  ...
 *      n: 0  1  2  3  4  5  6   7   8   9  10  ...
 *
 * That is, starting with 0 and 1, the next Fibonacci number is the sum
 * of the previous two. The "0-th" Fibonacci number is 0 and the first
 * Fibonacci number is 1.
 *
 * See https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @example
 * fibonacci(0); // => 0
 * fibonacci(1); // => 1
 * fibonacci(10); // => 55
 * fibonacci(12); // => 144
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The fibonacci of num
 */
function fibonacci(n) {

  if(n===0 || n===1){
    return n;
  }

 let current = 1;
 let previous = 0;
 let temp;

 for(let i = n; i>1; i--){
    temp = current;
    current = current + previous;
    previous = temp;
 }

 return current;
}

if (require.main === module) {
  console.log('Running sanity checks for fibonacci:');

  console.log(fibonacci(0)===0);
  console.log(fibonacci(1)===1);
  console.log(fibonacci(3)===2);
  console.log(fibonacci(10)===55);
  console.log(fibonacci(12)===144);
  console.log(fibonacci(7)===13);
}

module.exports = fibonacci;
