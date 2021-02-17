const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let strWithRepeats = '';
    for (let i = 0; i < num; i++) {
        strWithRepeats += str;
    }

    return strWithRepeats;
}

module.exports = repeatString
