/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = new Map();
    const closeList = [];
    let result = true;
    let bracket;

    bracketMap.set('(', ')');
    bracketMap.set('{', '}');
    bracketMap.set('[', ']');

    for (let ix = 0; ix < s.length; ix++) {
        bracket = bracketMap.get(s[ix]);
        if (bracket) {
            closeList.push(bracket);
        } else if (s[ix] !== closeList.pop()){
            result = false;
            break;
        }
    }

    if (closeList.length) {
        result = false;
    }

    return result;
};