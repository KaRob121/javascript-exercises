const leapYears = function(year) {
    if (typeof year !== 'number') {
        return 'ERROR';
    }
    let leapYear = false;

    if ((year % 4 === 0) && ((year % 100 !== 0) || ((year % 100 === 0) && (year % 400 === 0)))) {
        leapYear = true;
    } 

    return leapYear;
}

module.exports = leapYears
