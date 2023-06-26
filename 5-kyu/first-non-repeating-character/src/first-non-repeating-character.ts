
function getFirstNonRepeatingCharacter(str: string): string {
    const chars: string[] = str.toLowerCase().split('');
    const repeatingChars: { [key: string]: string } = {};

    for (let i = 0; i < chars.length; i++) {
        const currentChar = chars[i];

        if (repeatingChars[currentChar]) {
            continue;
        }

        if (!isCharRepeated(chars, currentChar, i + 1)) {
            return str[i];
        }

        repeatingChars[currentChar] = currentChar;
    }

    return '';
}

function isCharRepeated(chars: string[], char: string, startIndex: number): boolean {
    for (let i = startIndex; i < chars.length; i++) {
        if (char === chars[i]) {
            return true;
        }
    }
    return false;
}

export default getFirstNonRepeatingCharacter;