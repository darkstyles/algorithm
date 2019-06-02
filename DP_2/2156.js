var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_2/2156.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var wine = [];
var d = [];
var ix;

for (ix = 1; ix <= numberN; ix++) {
    wine[ix] = parseInt(inputs[ix]);
}

d[0] = 0;
d[1] = wine[1];
d[2] = wine[1] + wine[2];
for (ix = 3; ix <= numberN; ix++) {
    d[ix] = d[ix - 1];

    if (d[ix] < d[ix - 2] + wine[ix]) {
        d[ix] = d[ix - 2] + wine[ix];
    }

    if (d[ix] < d[ix - 3] + wine[ix] + wine[ix - 1]) {
        d[ix] = d[ix - 3] + wine[ix] + wine[ix - 1];
    }
}

console.log(d[numberN]);