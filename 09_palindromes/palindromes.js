const isCharacterALetter = function(char) {
    return char.toLowerCase() != char.toUpperCase()
}

const palindromes = function (str) {
    let newStr = ""
    for (i = 0; i < str.length; i ++) {
        if (isCharacterALetter(str[i])) {
            newStr += str[i].toLowerCase();
        }
    }
    strReversed = newStr.split("").reverse().join("");
    return newStr == strReversed;
    
};

// Do not edit below this line
module.exports = palindromes;
