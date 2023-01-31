
function isIsogram(str){
    const strSet = new Set();

    const strArr = str.toLowerCase().split('');
    strArr.forEach((item) => strSet.add(item))

    return str.length === strSet.size;
}

module.exports = isIsogram;