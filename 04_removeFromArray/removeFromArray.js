const removeFromArray = function(teste, remove1, remove2, remove3, remove4) {
    
    let arg = Array.from(teste);
    let novoArray = arg.filter(retira => retira !== remove1).filter(retira => retira !== remove2).filter(retira => retira !== remove3).filter(retira => retira !== remove4);
    return novoArray;
    

    //arg.splice(remove);
    //return console.log(arg);
 


};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4); //[])

// Do not edit below this line
module.exports = removeFromArray;

//Implement a function that takes an array and some other arguments 
//then removes the other arguments from that array: