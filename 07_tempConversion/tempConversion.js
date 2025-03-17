//F to C
//x °F ≘ (x − 32) × ⁠ 5 / 9 ⁠ °C
const convertToCelsius = function(temp) {
  const tempCelsius = (temp - 32) * (5/9);
  const tempRound = tempCelsius.toFixed(1);
  const tempNumber = Number(tempRound);

  if (tempCelsius % 2 ===0){
    return tempCelsius;
  }
  return tempNumber;

};
convertToCelsius(100)


//C to F
//x °C ≘ (x × ⁠ 9 / 5 ⁠ + 32) °F
const convertToFahrenheit = function(temp) {
  const tempFahrenheit = (temp * 9 / 5 + 32);
  const tempRound = tempFahrenheit.toFixed(1);
  const tempNumber = Number(tempRound);

  if (tempFahrenheit % 2 ===0){
    return tempFahrenheit;
  }
  return tempNumber;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
