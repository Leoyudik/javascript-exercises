const fibonacci = function(n) {
    n = parseInt(n); // Converte String em Number
    if (n === 0){
        return 0;
    }
    if (n < 0){
        return "OOPS";
    }

    const fib = [0,1];
    
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i -2];
    }
    return fib.at(-1);

};
console.log(fibonacci("0"))

// (1, 1, 2, 3)


// Do not edit below this line
module.exports = fibonacci;
