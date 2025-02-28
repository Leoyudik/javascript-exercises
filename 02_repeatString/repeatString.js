

const repeatString = function(string, num) {
    let resultado = '';
    if(num <0){
        return 'ERROR';
    }else{
        for (i=1; i<=num; i++){
            resultado +=string;
        } return resultado;
    }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
