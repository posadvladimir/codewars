
function multiplesOf3Or5(number) {
    let sum = 0;

    if (number <= 0) return 0;

    for (let i = number - 1; i >= 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
}

module.exports = multiplesOf3Or5;