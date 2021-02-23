const fibonacci = function(num) {
    // Converts strings to numbers if needed
    if (typeof num !== 'number') {
        num = +num;
    }

    if (num < 0) {
        return 'OOPS';
    }
    else if (num === 1 || num === 2) {
        return 1;
    }
    else { 
        return fibonacci(num-1) + fibonacci(num-2);
    }

}

module.exports = fibonacci
