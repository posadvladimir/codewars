
function isPangramFirstSolution(string) {
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

function isPangramSecondSoltuion(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return alphabet.split('').every((letter) => string.toLowerCase().includes(letter));
}

module.exports = {
    isPangramFirstSolution,
    isPangramSecondSoltuion
};