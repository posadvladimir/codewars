
const XO = require('./exes-and-ohs');

describe(('Exes and Ohs '), () => {
    test('ooxx', () => {
        expect(XO('ooxx')).toBe(true);
    })
    test('xooxx', () => {
        expect(XO('xooxx')).toBe(false);
    })
    test('ooxXm', () => {
        expect(XO('ooxXm')).toBe(true);
    })
    test('zpzpzpp', () => {
        expect(XO('zpzpzpp')).toBe(true);
    })
    test('zzoo', () => {
        expect(XO('zzoo')).toBe(false);
    })
})