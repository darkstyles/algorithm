function lengthOfLongestSubstring(s) {
    const sArray = s.split('');
    const current = [];
    let longest = 0;
    let char;
    let index;

    for (let ix = 0; ix < sArray.length; ix++) {
        char = sArray[ix];
        index = current.indexOf(char);
        if (index !== -1) {
            longest = Math.max(longest, current.length);
            current.splice(0, index + 1);
        }

        current.push(sArray[ix]);
    }

    return Math.max(longest, current.length);
}