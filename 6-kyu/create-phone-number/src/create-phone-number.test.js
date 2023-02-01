
const { createPhoneNumberFirstSolution, createPhoneNumberSecondSolution } = require('./create-phone-number');

describe(('Create Phone Number'), () => {
    describe(('First solution'), () => {
        test('[1,2],[1]', () => {
            expect(createPhoneNumberFirstSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
        })
    })
    describe(('Second solution'), () => {
        test('[1,2],[1]', () => {
            expect(createPhoneNumberSecondSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
        })
    })
})