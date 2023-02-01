
const sumTwoSmallestNumbers = require('./sum-of-two-lowest-positive-integers');

describe(('Sum of two lowest positive integers'), () => {
    test('[19, 5, 42, 2, 77]', () => {
        expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77])).toBe(7);
    })
    test('[10, 343445353, 3453445, 3453545353453]', () => {
        expect(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])).toBe(3453455);
    })
})