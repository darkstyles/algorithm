var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/1912.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var d = [];
var ix;

for (ix = 0; ix < numberN; ix++) {
    d[ix] = numbers[ix];
    if (ix > 0 && d[ix] < d[ix - 1] + numbers[ix]) {
        d[ix] = d[ix - 1] + numbers[ix];
    }
}

console.log(Math.max.apply(null, d));