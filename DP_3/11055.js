var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/11055.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var d = [];
var ix, jx;

for (ix = 0; ix < numberN; ix++) {
    d[ix] = numbers[ix];
    for (jx = 0; jx < ix; jx++) {
        if (numbers[jx] < numbers[ix] && d[ix] < d[jx] + numbers[ix]) {
            d[ix] = d[jx] + numbers[ix];
        }
    }
}

console.log(Math.max.apply(null, d));