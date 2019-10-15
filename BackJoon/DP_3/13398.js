var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/13398.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var dl = [];
var dr = [];
var ix;

if (numberN > 1) {

}

for (ix = 0; ix < numberN; ix++) {
    dl[ix] = numbers[ix];
    if (ix > 0 && dl[ix] < dl[ix - 1] + numbers[ix]) {
        dl[ix] = dl[ix - 1] + numbers[ix];
    }
}

for (ix = numberN - 1; ix >= 0; ix--) {
    dr[ix] = numbers[ix];
    if (ix < numberN - 1 && dr[ix] < dr[ix + 1] + numbers[ix]) {
        dr[ix] = dr[ix + 1] + numbers[ix];
    }
}

var max = 0;
for (ix = 0; ix < numberN; ix++) {
    if (ix === 0) {
        max = dr[ix + 1];
    } else if (ix === numberN - 1) {
        max = Math.max(max, dl[ix - 1]);
    } else {
        max = Math.max(max, dl[ix - 1] + dr[ix + 1]);
    }
}

if (numberN === 1) {
    max = numbers[0];
} else {
    max = Math.max(max, Math.max.apply(null, dl));
}

console.log(max);