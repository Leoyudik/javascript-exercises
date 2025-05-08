const palindromes = function (arr) {
    
    //Retira toda a pont
    const arrPontuationDeleted = 
        Array.from(arr).map(pontuacao => pontuacao.replace(/[/?,.'"*-+! ""]/g, "")
        .trim())
        .filter(frase => frase !== "")
        .map(word => word.toLowerCase())
    const arrString = arrPontuationDeleted.join("");

    let arrInvert = arrPontuationDeleted.slice().reverse().join("");
    
    console.log(arrString)
    console.log(arrInvert)
    console.log(arr)
    return (arrString === arrInvert) ? true : false;

};


palindromes('racecar');


// Do not edit below this line
module.exports = palindromes;
