var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP_2/11057.txt'), 'utf8').toString().trim();

var numberN = parseInt(input);
var mod = 10007;
var d = [];
var ix, jx, kx, result = 0;



d[1] = [];
for (ix = 0; ix <= 9; ix++) {
    d[1][ix] = 1;
}

for (ix = 2; ix <= numberN; ix++) {
    d[ix] = [];
    for (jx = 0; jx <= 9; jx++) {
        d[ix][jx] = 0;
        for (kx = 0; kx <= jx; kx++) {
            d[ix][jx] += d[ix - 1][kx];
            d[ix][jx] %= mod;
        }
    }
}

for (ix = 0; ix <= 9; ix++) {
    result += d[numberN][ix];
}

console.log(result % mod);