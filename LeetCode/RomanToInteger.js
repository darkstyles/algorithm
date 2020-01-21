var romanToInt = function(s) {
    const charset = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let curr
    let prev;
    let sum = 0;

    for(let ix = 0; ix < s.length; ix++) {
        prev = charset[s[ix]];
        curr = charset[s[ix + 1]];
        if (s[ix + 1] !== '' && prev < curr) {
            sum += curr - prev;
            ix++;
        } else {
            sum += prev;
        }
    }
    return sum;
};