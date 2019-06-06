var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/11054.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var d = [];
var d2 = [];
var ix, jx;

for (ix = 0; ix < numberN; ix++) {
    d[ix] = 1;
    for (jx = 0; jx < ix; jx++) {
        if (numbers[jx] < numbers[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
        }
    }
}

numbers.reverse();

for (ix = 0; ix < numberN; ix++) {
    d2[ix] = 1;
    for (jx = 0; jx < ix; jx++) {
        if (numbers[jx] < numbers[ix] && d2[ix] < d2[jx] + 1) {
            d2[ix] = d2[jx] + 1;
        }
    }
}

var max = 0;
for (ix = 0, jx = d.length - 1; ix < d.length; ix++, jx--) {
    max = Math.max(max, d[ix] + d2[jx] - 1);
}


console.log(max);