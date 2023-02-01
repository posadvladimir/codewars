
const getCount = require('./vowel-count');

describe(('Vowel Count'), () => {
    test('abraedon er', () => {
        expect(getCount('abraedon er')).toBe(5);
    })
    test('mbd', () => {
        expect(getCount('mbd')).toBe(0);
    })
    test('restry', () => {
        expect(getCount('restry')).toBe(1);
    })
})