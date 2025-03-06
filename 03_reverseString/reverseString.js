
const reverseString = function(palavra) {
    const letras = Array.from(palavra).reverse().join("");
    return letras;


};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
