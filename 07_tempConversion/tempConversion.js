const convertToCelsius = function(fahrenheit) {
  return Math.round((10 * (fahrenheit - 32) * (5/9))) / 10
};

const convertToFahrenheit = function(celcius) {
  return Math.round((10 * ((celcius * (9/5)) + 32))) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
