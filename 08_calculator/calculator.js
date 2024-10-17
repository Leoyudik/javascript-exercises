const add = function(n1,n2) {
	formula = n1 + n2;
  return formula;
};

const subtract = function(n1, n2) {
  formula = n1 - n2;
  return formula;
};


const sum = function(number) {
  let resultado = 0;

  for (let i = 0; i < number.length; i++){
    resultado += number[i];
  }
    return resultado;

};

const multiply = function(number) {
  let resultado = 1;

  if (number.length === 0){
    resultado = 0;
    return resultado;
  } else {
    for (let i = 0; i < number.length; i++){
      resultado = resultado * number[i];
  }
 }return resultado;

};

const power = function(base, exp) {
  let resultado = 1;

  for(let i = 0; i < exp; i++)
  resultado *= base;
  return resultado;
  
};


const factorial = function(num) {
	let resultado = 1;

  if(num === 0){
    return resultado;
  } else if ( num === 1 ){
    return resultado;
  } else{ 
    for (let i = num; i > 1; i--){
      resultado = resultado * i;
      console.log(resultado, i);
    }
    return resultado ;
  }
};

factorial(10); //3628800

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
