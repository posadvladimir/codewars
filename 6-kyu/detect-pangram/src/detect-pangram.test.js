
const { isPangramFirstSolution, isPangramSecondSoltuion } = require('./detect-pangram');

describe(('Detect Pangram'), () => {
    describe(('First solution'), () => {
        test('The quick brown fox jumps over the lazy dog.', () => {
            expect(isPangramFirstSolution('The quick brown fox jumps over the lazy dog.')).toBe(true);
        })
        test('This is not a pangram.', () => {
            expect(isPangramFirstSolution('This is not a pangram.')).toBe(false);
        })
    })
    describe(('Second solution'), () => {
        test('The quick brown fox jumps over the lazy dog.', () => {
            expect(isPangramSecondSoltuion('The quick brown fox jumps over the lazy dog.')).toBe(true);
        })
        test('This is not a pangram.', () => {
            expect(isPangramSecondSoltuion('This is not a pangram.')).toBe(false);
        })
    })
})