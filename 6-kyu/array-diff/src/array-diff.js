
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

module.exports = arrayDiff;