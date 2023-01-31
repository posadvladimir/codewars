
function XO(str) {
    return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}

module.exports = XO;