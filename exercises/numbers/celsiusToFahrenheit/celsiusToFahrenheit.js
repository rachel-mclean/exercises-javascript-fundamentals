/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return Math.round(temp*(9/5)+32);
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  console.log(celsiusToFahrenheit(0)===32);
  console.log(celsiusToFahrenheit(10)===50);
  console.log(celsiusToFahrenheit(100)===212);
  console.log(celsiusToFahrenheit(13)===55);
  console.log(celsiusToFahrenheit(81)===178);
}

module.exports = celsiusToFahrenheit;
