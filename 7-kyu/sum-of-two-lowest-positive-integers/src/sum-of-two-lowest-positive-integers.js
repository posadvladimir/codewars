
function sumTwoSmallestNumbers(numbers) {
    const sortArr = [...numbers];

    sortArr.sort((a, b) => a - b);

    return sortArr[0] + sortArr[1];
}

module.exports = sumTwoSmallestNumbers;