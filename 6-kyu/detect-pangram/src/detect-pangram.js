
function isPangram(string){
    const alphabetLength = 26;
    const unicodeValueA = 65;
    const unicodeValueZ = 90;

    const lettersSet = new Set();

    for (let char of string.toUpperCase()) {
        if (char.charCodeAt(0) >= unicodeValueA && char.charCodeAt(0) <= unicodeValueZ) {
            lettersSet.add(char);
        }
    }

    return lettersSet.size === alphabetLength;
}

module.exports = isPangram;