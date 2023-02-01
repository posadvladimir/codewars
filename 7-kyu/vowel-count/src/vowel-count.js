
function getCount(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let vowlesCount = 0;

    for (let letter of str) {
        if (vowelsArr.includes(letter)) vowlesCount++;
    }

    return vowlesCount;
}

module.exports = getCount;