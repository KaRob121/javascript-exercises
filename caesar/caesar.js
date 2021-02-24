// Had to look up solution from https://github.com/KaRob121/javascript-exercises/blob/solutions/caesar/caesar.js
// My understanding of the code is written in comments below.
// From this exercise, I learned about converting characters to their Unicode values and vice versa.
// I also learned the difference between ASCII and Unicode, where ASCII is much more limited, as it only deals with unaccented, English letters, some punctuation symbols, and control characters (thanks https://www.makeuseof.com/ascii-vs-unicode/). 

const caesar = function(string, shift) {
    return string 
        // Creates an array containing every character in the string input
        .split("")
        // Takes in each character from the string as input and returns its shifted counterpart
        .map(char => shiftChar(char, shift))
        // Recreates the string from the array of characters
        .join("");
};

// Determines whether a letter is uppercase (Unicode < 97) or lowercase (Unicode value > 97)
const codeSet = code => (code < 97 ? 65 : 97);

// A modulo function that works with negative numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    // .charCodeAt() method that determines the Unicode value of a character
    const code = char.charCodeAt();

    // Checks that the character being looked at is a regular, English letter
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        // .fromCharCode() method converts a Unicode value to its corresponding character
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    // If a character is not a regular, English letter, return it as it is.
    return char;
}

module.exports = caesar
