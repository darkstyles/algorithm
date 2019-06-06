var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP_3/1699.txt'), 'utf8').toString().trim();

var N = parseInt(input);
var d = [];
var ix, jx;

d[0] = 0;
for (ix = 1; ix <= 100000; ix++) {
    d[ix] = ix;
    for (jx = 1; jx * jx <= ix; jx++) {
        if (d[ix] > d[ix - (jx * jx)] + 1) {
            d[ix] = d[ix - (jx * jx)] + 1;
        }
    }
}

console.log(d[N]);