const convertToCelsius = function(temp) {
  let celsius = (temp - 32)* (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahr = temp * (9/5) + 32;
  fahr = Math.round(fahr * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
