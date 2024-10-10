const convertToCelsius = function(f) {  //F to Celcius
  let formulaCelcius = (f - 32) * (5/9);
  celciusRounded = parseFloat(formulaCelcius.toFixed(1));
  return celciusRounded;

};

//convertToCelsius(32);

const convertToFahrenheit = function(c) {
  let formulaFahrenheit = c * (9/5) + 32;
  fahrenheitRounded = parseFloat(formulaFahrenheit.toFixed(1));
  return fahrenheitRounded;

};

//convertToFahrenheit(73.2);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
