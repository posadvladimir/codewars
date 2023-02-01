
const arrayDiff = require('./array-diff');

describe(('Array.diff'), () => {
    test('[1,2],[1]', () => {
        expect(arrayDiff([1,2],[1])).toEqual([2]);
    })
    test('5, 9', () => {
        expect(arrayDiff([1,2,2,2,3],[2])).toEqual([1,3]);
    })
})