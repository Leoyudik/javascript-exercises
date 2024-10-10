const sumAll = function(n1,n2) {
    //let inteiro1 = Math.abs(n1);
    //let inteiro2 = Math.abs(n2);
    let dif = Math.abs(n1-n2);
    let soma = 0;
    let resultado;

    if ((n1 < 0 || n2 < 0) || ((!Number.isInteger(n1) || !Number.isInteger(n2))) /*|| (Number(n1) !== n1 || Number(n2) !== n2 )*/){
        return 'ERROR';

    } else if (n1 < n2){

        for(let i = 1; i <= dif; i++){
            soma += n1 + i;
            
          }
          return resultado = soma + n1;
       // console.log(total);
    
     } else if (n1 > n2) {
         for(let i = 1; i <= dif; i++){
              soma += n2 + i;
        
        }
        return resultado = soma + n2;  
     }
    //return 'ERROR';
};

//sumAll(1.5, 4);

sumAll(5, "10");


module.exports = sumAll;


//(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10



n1 = "10";
Number.isNaN(n1);



/*

const sumAll = function(n1,n2) {

    let inteiro1 = Math.abs(n1);
    let inteiro2 = Math.abs(n2);
    //let dif = Math.abs(inteiro1-inteiro2);

    if(inteiro1 < inteiro2){

        for(inteiro1; inteiro1 < inteiro2; inteiro1++){
            soma = inteiro1 + 1;
        }
        return total = soma + inteiro1;
        console.log(total);

    } else if (inteiro1 > inteiro2){

        for(inteiro2; inteiro2 < inteiro; inteiro2++){
            soma = inteiro2 + 1;

        }
        let total = soma + inteiro2;
        return total;
    }

    console.log(total);

};

*/