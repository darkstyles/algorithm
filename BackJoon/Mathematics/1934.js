var inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var gcd = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

var lsm = function (a, b) {
    return (a * b) / gcd(a, b);
};

var ix, input;
for (ix = 1; ix < inputs.length; ix++) {
    input = inputs[ix].split(' ');
    console.log(lsm(+input[0], +input[1]));
}