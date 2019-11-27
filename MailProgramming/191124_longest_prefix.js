longestCommonPrefix = function(strs) {
    const criteria = strs.length ? strs[0] : [];
    let result = '';
    let sChar;
    let cChar;
    let isExist;

    for (let ix = 0; ix < criteria.length; ix++) {
        sChar = criteria[ix];
        isExist = true;
        for (let jx = 0; jx < strs.length; jx++) {
            cChar = strs[jx][ix];
            if (!cChar || sChar !== cChar) {
                isExist = false;
                break;
            }
        }

        if (isExist) {
            result += sChar;
        } else {
            break;
        }
    }

    return result;
};