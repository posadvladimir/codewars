
const addBinary = require('./binary-addition');

describe(('Isograms'), () => {
    test('1, 1', () => {
        expect(addBinary(1, 1)).toBe('10');
    })
    test('5, 9', () => {
        expect(addBinary(5, 9)).toBe('1110');
    })
})