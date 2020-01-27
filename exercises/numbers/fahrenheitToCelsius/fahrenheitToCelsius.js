/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  return Math.round((temp-32)*(5/9));
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  console.log(fahrenheitToCelsius(32)===0);
  console.log(fahrenheitToCelsius(50)===10);
  console.log(fahrenheitToCelsius(212)===100);
  console.log(fahrenheitToCelsius(55)===13);
  console.log(fahrenheitToCelsius(178)===81);
}

module.exports = fahrenheitToCelsius;
