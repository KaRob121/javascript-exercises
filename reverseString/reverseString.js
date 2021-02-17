const reverseString = function(str) {
    let backwardStr = '';
    let i = str.length - 1;
    while (i >= 0) {
        backwardStr += str[i];
        i--;
    }

    return backwardStr;
}

module.exports = reverseString
