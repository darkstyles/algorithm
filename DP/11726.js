var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP/11726.txt'), 'utf8').toString().trim();

var numberN = parseInt(input);
var count = [];
var ix;

count[1] = 1;
count[2] = 2;
for (ix = 3; ix <= numberN; ix++) {
    count[ix] = (count[ix - 1] + count[ix - 2]) % 10007;
}

console.log(count[numberN]);