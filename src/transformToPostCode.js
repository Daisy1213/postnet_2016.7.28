'use strict';

function transformToPostCode(barcode, postCode){
    let digits = loadAllDigit();
    let digitsArray = getDigitsArray(barcode)
    let postCodeArray = changePostCodeArray(digitsArray, digits);
    let codeArray = checkCD(postCodeArray);
    return getPostCode(codeArray);
}

function loadAllDigit() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidBarcodeDigit(barcode) {
    for (let i = 0; i < barcode.length; i++) {
        if (!(barcode.charAt(i) === "|" || barcode.charAt(i) === ":" || barcode.charAt(i) === " ")) {
            return false;
        }
    }
    return true;
}

function isHasFrame(barcode) {
    return barcode.slice(0, 2) === "| " && barcode.slice(-2) === " |";
}

function isMatchDigitLength(barcode) {
    let flag = false;
    for (let item of barcode.split(" ")) {
        if (item.length === 5) {
            flag = true;
        } else {
            return false;
        }
    }
    return flag;
}

function isValidBarcodeLength(barcode) {
    let array = barcode.split(" ");
    return array.length === 6 || array.length === 10;

}

function getDigitsArray(barcode) {
    let array = [];
    for (let item of barcode.slice(2, -2).split(' ')) {
        array.push(item);
    }
    return array;
}

function changePostCodeArray(array, digits) {
    let postCodeArray = [];
    array.forEach((item) => {
        postCodeArray.push(digits.indexOf(item));
    })
    return postCodeArray;
}

function checkCD(array) {
    let temp = array.reduce((a, b) => {
        return a + b;
    });
    return temp % 10 === 0 ? array : 'error';
}

function getPostCode(codeArray) {
    let postCode = '';
    if (codeArray.length === 5) {
        postCode = codeArray.join('');
    } else {
        for (let i = 0; i < 5; i++) {
            postCode += codeArray[i];
        }
        postCode += '-';
        for (let i = 5; i < codeArray.length; i++) {
            postCode += codeArray[i];
        }
    }
    return postCode;
}
