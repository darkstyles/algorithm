var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP/1463.txt'), 'utf8').toString().trim();

var numberN = parseInt(input);
var count = [];
var ix;

count[1] = 0;
for (ix = 2; ix <= numberN; ix++) {
    count[ix] = count[ix - 1] + 1;
    if (ix % 2 === 0 && count[ix] > count[ix / 2] + 1) {
        count[ix] = count[ix / 2] + 1;
    }

    if (ix % 3 === 0 && count[ix] > count[ix / 3] + 1) {
        count[ix] = count[ix / 3] + 1;
    }
}

console.log(count[numberN]);