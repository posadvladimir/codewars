
function createPhoneNumber(numbers){
    return numbers.reduce((accumulator , currentValue, currentIndex) => {
        if (currentIndex === 2) {
            return accumulator + `${currentValue}) `;
        }
        if (currentIndex === 5) {
            return accumulator + `${currentValue}-`;
        }
        return accumulator + currentValue;
    }, '(');
}

module.exports = createPhoneNumber;