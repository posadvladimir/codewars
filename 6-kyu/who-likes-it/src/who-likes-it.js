
function getLikes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    }
    if (names.length === 1) {
        return `${names[0]} likes this`;
    }
    if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }

    return names.reduceRight((accumulator, currentValue, index, array) => {
        if (index === array.length - 1) {
            return `and ${currentValue} like this`;
        }
        if (index === array.length - 2) {
            return `${currentValue} ` + accumulator;
        }
        if (index === array.length - 3) {
            return `${currentValue}, ` + accumulator;
        }
    }, '');
}

module.exports = getLikes;