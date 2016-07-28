describe("transformToBarcode", function () {
    it("should return postcode", function () {
        let input = "| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |";
        let result = transformToPostCode(input);
        let postCode = '45056-12340';
        expect(result).toEqual(postCode);
    });
});

describe("isValidBarcodeDigit", function () {
    it("should return boolean", function () {
        let barcode = "|: ";
        let result = isValidBarcodeDigit(barcode);
        let flag = true;
        expect(result).toEqual(flag);
    });
    it("should return boolean", function () {
        let barcode = "|: *";
        let result = isValidBarcodeDigit(barcode);
        let flag = false;
        expect(result).toEqual(flag);
    });
});

describe("isHasFrame", function () {
    it("should return boolean", function () {
        let barcode = "| |: ::| |";
        let result = isHasFrame(barcode);
        let flag = true;
        expect(result).toEqual(flag);
    });
    it("should return boolean", function () {
        let barcode = "| ";
        let result = isHasFrame(barcode);
        let flag = false;
        expect(result).toEqual(flag);
    });
});
describe("isMatchDigitLength", function () {
    it("should return isMatch", function () {
        let barcode = "|||||  |||||";
        let result = isMatchDigitLength(barcode);
        let flag = false;
        expect(result).toEqual(flag);
    });
    it("should return isMatch", function () {
        let barcode = "*****";
        let result = isMatchDigitLength(barcode);
        let flag = true;
        expect(result).toEqual(flag);
    });
});

describe("isValidBarcodeLength", function () {
    it("should return isValid", function () {
        let input = '|||:| |:::| ：||||';
        let result = isValidBarcodeLength(input);
        let flag = false;
        expect(result).toEqual(flag);
    });
});

describe("getDigitsArray", function () {
    it("should return array", function () {
        let input = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let result = getDigitsArray(input);
        let array = ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'];
        expect(result).toEqual(array);
    });
});

describe("changePostCodeArray", function () {
    it("should return numberCode", function () {
        let input = ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'];
        let result = changePostCodeArray(input, loadAllDigit());
        let postCodeArray = [9, 5, 7, 1, 3, 5];
        expect(result).toEqual(postCodeArray);
    })
})

describe("checkCD", function () {
    it("should get cd correct", function () {
        let input = [9, 5, 7, 1, 3, 5];
        let result = checkCD(input);
        let codeArray = [9, 5, 7, 1, 3, 5];
        expect(result).toEqual(codeArray);
    });
    it("should get cd correct", function () {
        let input = [9, 5, 7, 1, 3, 2];
        let result = checkCD(input);
        let codeArray = 'error';
        expect(result).toEqual(codeArray);
    });
});

describe("getPostCode", function () {
    it("should return postCode", function () {
        let input = '4505612340';
        let result = getPostCode(input);
        let postCode = '45056-12340';
        expect(result).toEqual(postCode);
    });
});

