var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP_3/2225.txt'), 'utf8').toString().trim();

var splits = input.split(' ');
var N = parseInt(splits[0]);
var K = parseInt(splits[1]);
var d = [];
var mod = 1000000000;
var ix, jx, kx;

d[1] = [];
for (ix = 0; ix <= N; ix++) {
    d[1][ix] = 1;
}

for (ix = 2; ix <= K; ix++) {
    d[ix] = [];
    for (jx = 0; jx <= N; jx++) {
        for (kx = 0; kx <= jx; kx++) {
            if (!d[ix][jx]) {
                d[ix][jx] = 0;
            }
            d[ix][jx] += d[ix - 1][kx];
        }
        d[ix][jx] %= mod;
    }
}

console.log(d[K][N]);