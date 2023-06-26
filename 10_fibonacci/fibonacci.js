const fibonacci = function(num) {
    let num1 = parseInt(num);
    if (num1 < 0) return "OOPS"
    let sum = 0;
    let fib = [0, 1];
    for (let i = 2; i <= num1; i++){
        sum = fib[i-2] + fib[i-1];
        fib.push(sum);
    }
    return fib[num1];
};

// Do not edit below this line
module.exports = fibonacci;
