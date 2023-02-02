
const isPangram = require('./detect-pangram');

describe(('Detect Pangram'), () => {
    test('The quick brown fox jumps over the lazy dog.', () => {
        expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true);
    })
    test('This is not a pangram.', () => {
        expect(isPangram('This is not a pangram.')).toBe(false);
    })
})