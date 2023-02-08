
function productFib(prod){
    let fNm2 = 0;
    let fNm1 = 1;
    let prodFib = fNm1 * fNm2;

    while (prodFib <= prod) {
        if (prodFib === prod) {
            return [fNm2, fNm1, true];
        }

        const fN = fNm1 + fNm2;
        fNm2 = fNm1;
        fNm1 = fN;
        prodFib = fNm1 * fNm2;
    }

    return [fNm2, fNm1, false];
}

module.exports = productFib;