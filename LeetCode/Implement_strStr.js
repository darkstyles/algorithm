/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    const needleLen = needle.length;
    const stackLen = haystack.length;
    let subStr;
    let result = -1;
    for (let ix = 0; ix < stackLen; ix++) {
        subStr = haystack.slice(ix, ix + needleLen);
        if (subStr === needle) {
            result = ix;
            break;
        }
    }

    return result;

};