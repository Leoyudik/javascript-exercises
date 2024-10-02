const repeatString = function(string, num) {
    
    let resultado = ''
    if(num<0){
        return 'ERROR';
    }
    for (let i =1; i <= num; i++){
        resultado += string;
    }
    return resultado
};


console.log(repeatString('hey',3));












// Do not edit below this line
module.exports = repeatString;
