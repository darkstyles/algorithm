/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let currStr;
    let temp = [];
    let result = digits ? [''] : [];

    for (let ix = 0; ix < digits.length; ix++) {
        currStr = digitMap[+digits[ix]];

        temp = [];
        for (let jx = 0; jx < currStr.length; jx++) {
            for (let kx = 0; kx < result.length; kx++) {
                temp.push(result[kx] + currStr[jx]);
            }
        }

        result = temp;
    }

    return result;
};