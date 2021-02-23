const palindromes = function(str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length-1;
    let palindrome = true;
    while (left != right) {
        // Checks that the current characters being looked at are letters
        if (str[left].toUpperCase() === str[left].toLowerCase()) {
            left++; 
            continue;
        }
        if (str[right].toUpperCase() === str[right].toLowerCase()) {
            right--;
            continue;
        }

        if (str[left] !== str[right]) {
            palindrome = false;
            break;
        }
        left++;
        right--;
    }
    return palindrome;
}

module.exports = palindromes
