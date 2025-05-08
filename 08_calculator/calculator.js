const add = function(num1, num2) {
  return num1 + num2;

};
// calculator.add(0, 0)
const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(arr) {
	return arr.reduce((total, valor) => total + valor, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, valor) => total * valor);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1;
  }
  for (let i = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
};

factorial(5)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
