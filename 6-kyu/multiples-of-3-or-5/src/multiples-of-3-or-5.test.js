
const multiplesOf3Or5 = require('./multiples-of-3-or-5');

describe(('Multiples of 3 or 5'), () => {
    test('10', () => {
        expect(multiplesOf3Or5(10)).toBe(23);
    })
    test('11', () => {
        expect(multiplesOf3Or5(11)).toBe(33);
    })
    test('-5', () => {
        expect(multiplesOf3Or5(-5)).toBe(0);
    })
})