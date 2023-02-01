
const createPhoneNumber = require('./create-phone-number');

describe(('Create Phone Number'), () => {
    test('[1,2],[1]', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
    })
})