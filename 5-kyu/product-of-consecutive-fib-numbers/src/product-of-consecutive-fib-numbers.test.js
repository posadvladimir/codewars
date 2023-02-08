
const productFib = require('./product-of-consecutive-fib-numbers');

describe(('Product of consecutive Fib numbers'), () => {
    test('4895', () => {
        expect(productFib(4895)).toEqual([55, 89, true ]);
    })
    test('5895', () => {
        expect(productFib(5895)).toEqual([89, 144, false]);
    })
    test('447577', () => {
        expect(productFib(447577)).toEqual([610, 987, false]);
    })
    test('74049690', () => {
        expect(productFib(74049690)).toEqual([6765, 10946, true ]);
    })
})