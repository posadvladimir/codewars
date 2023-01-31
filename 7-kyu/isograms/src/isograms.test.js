
const isIsogram = require('./isograms');

describe(('Isograms'), () => {
    test('Dermatoglyphics', () => {
        expect(isIsogram('Dermatoglyphics')).toBe(true);
    })
    test('moose', () => {
        expect(isIsogram('moose')).toBe(false);
    })
    test('aba', () => {
        expect(isIsogram('aba')).toBe(false);
    })
})