
function createPhoneNumberFirstSolution(numbers){
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

function createPhoneNumberSecondSolution(numbers){
    let format = '(xxx) xxx-xxxx';

    for (let number of numbers) {
        format = format.replace('x', number);
    }

    return format;
}

module.exports = {
    createPhoneNumberFirstSolution,
    createPhoneNumberSecondSolution
};