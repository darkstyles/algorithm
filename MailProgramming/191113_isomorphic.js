isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();
    let sChar;
    let tChar;
    let result = true;

    for (let ix = 0; ix < s.length; ix++) {
        sChar = s.charAt(ix);
        tChar = t.charAt(ix);
        if (sMap.get(sChar) !== tMap.get(tChar)) {
            result = false;
            break;
        }

        sMap.set(sChar, ix + 1);
        tMap.set(tChar, ix + 1);
    }

    return result;
};