var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP/15988.txt'), 'utf8').toString().trim().split('\n');

var logs = [];
var numberN, count = [];
var ix, jx;

count[1] = 1;
count[2] = 2;
count[3] = 4;
for (jx = 4; jx <= 1000000; jx++) {
    count[jx] = (count[jx - 1] + count[jx - 2] + count[jx - 3]) % 1000000009;
}

for (ix = 0; ix < parseInt(inputs[0]); ix++) {
    numberN = parseInt(inputs[ix + 1]);
    logs.push(count[numberN]);
}

console.log(logs.join('\n'));