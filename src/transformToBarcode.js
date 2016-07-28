'use strict';

function transformToBarcode(postCode) {
    let digits = loadAllDigit();
    let codeNumber = getCodeNumber(postCode);
    let cd = calculateCD(codeNumber);
    let checkedCode = getCompleteCode(codeNumber, cd);
    return getBarcode(checkedCode, digits);
}

function loadAllDigit() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidCode(code) {
    let flag = false;
    for (let item of code) {
        if (item != '-' && item != '0' && item != '1' && item != '2' && item != '3' && item != '4' && item != '5'
            && item != '6' && item != '7' && item != '8' && item != '9') {
            return false;
        } else {
            flag = true;
        }
    }
    return flag;
}

function getCodeNumber(postCode) {
    if (postCode.indexOf('-') !== -1) {
        if (postCode.indexOf('-') === 5) {
            let splitCode = postCode.split('-');
            return splitCode[0] + splitCode[1];
        } else {
            return 'error';
        }
    } else {
        return postCode;
    }
}

function isValidCodeLength(postCode) {
    return postCode.length === 5 || postCode.length === 9;

}


function calculateCD(codeNumber) {
    let sum = 0;
    let cd = 0;
    for (let i = 0; i < codeNumber.length; i++) {
        sum += parseFloat(codeNumber[i]);
    }
    if (sum % 10 === 0) {
        cd = 0;
    } else {
        cd = 10 - sum % 10;
    }
    return cd;
}

function getCompleteCode(code, cd) {
    return code + cd;
}

function getBarcode(checkedCode, digits) {
    let barcode = '|';
    for (let item of checkedCode) {
        barcode += digits[parseInt(item)];
    }
    barcode += '|';
    return barcode;
}







