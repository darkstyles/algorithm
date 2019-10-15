var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP/15990.txt'), 'utf8').toString().trim().split('\n');

var logs = [];
var numberN, result, count = [];
var ix;

for (ix = 1; ix <= 100000; ix++) {
    if (!count[ix]) {
        count[ix] = [];
    }

    if (ix === 1) {
        count[ix][1] = 1;
        count[ix][2] = 0;
        count[ix][3] = 0;
    } else if (ix > 3) {
        count[ix][1] = (count[ix - 1][2] + count[ix - 1][3]) % 1000000009;
    }

    if (ix === 2) {
        count[ix][1] = 0;
        count[ix][2] = 1;
        count[ix][3] = 0;
    } else if (ix > 3){
        count[ix][2] = (count[ix - 2][1] + count[ix - 2][3]) % 1000000009;
    }

    if (ix === 3) {
        count[ix][1] = 1;
        count[ix][2] = 1;
        count[ix][3] = 1;
    } else if (ix > 3) {
        count[ix][3] = (count[ix - 3][1] + count[ix - 3][2]) % 1000000009;
    }
}

for (ix = 0; ix < parseInt(inputs[0]); ix++) {
    numberN = parseInt(inputs[ix + 1]);
    result = (count[numberN][1] + count[numberN][2] + count[numberN][3]) % 1000000009;
    logs.push(result);
}

console.log(logs.join('\n'));