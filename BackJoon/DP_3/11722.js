var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/11722.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var d = [];
var ix, jx;

numbers.reverse();

for (ix = 0; ix < numberN; ix++) {
    d[ix] = 1;
    for (jx = 0; jx < ix; jx++) {
        if (numbers[jx] < numbers[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
        }
    }
}

console.log(Math.max.apply(null, d));