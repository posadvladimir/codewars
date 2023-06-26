
import getFirstNonRepeatingCharacter from './first-non-repeating-character';

describe('First non-repeating character', () => {
    test('a', () => {
        expect(getFirstNonRepeatingCharacter('a')).toBe('a');
    });
    test('stress', () => {
        expect(getFirstNonRepeatingCharacter('stress')).toBe('t');
    });
    test('sTreSS', () => {
        expect(getFirstNonRepeatingCharacter('sTreSS')).toBe('T');
    });
    test('mOonMen', () => {
        expect(getFirstNonRepeatingCharacter('mOonMen')).toBe('e');
    });
    test('ttTrrR', () => {
        expect(getFirstNonRepeatingCharacter('ttTrrR')).toBe('');
    });
    test('', () => {
        expect(getFirstNonRepeatingCharacter('')).toBe('');
    });
});

export {};