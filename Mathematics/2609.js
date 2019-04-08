var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

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

var inputA = input[0];
var inputB = input[1];

console.log(gcd(inputA, inputB));
console.log(lsm(inputA, inputB));