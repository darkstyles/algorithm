var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_2/9465.txt'), 'utf8').toString().trim().split('\n');

var testCase = parseInt(inputs[0]);
var numberN;
var stickerMap = [];
var d = [];
var inputIndex = 1;
var ix, jx, kx;


for (ix = 0; ix < testCase; ix++) {
    numberN = parseInt(inputs[inputIndex++]);

    d = [];
    for (jx = 0; jx < 2; jx++) {
        stickerMap[jx] = inputs[inputIndex].split(' ');
        inputIndex++;
    }

    d[0] = [];
    d[0][0] = 0;
    d[0][1] = +stickerMap[0][0];
    d[0][2] = +stickerMap[1][0];
    for (jx = 1; jx < numberN; jx++) {
        d[jx] = [];
        d[jx][0] = Math.max(d[jx - 1][0], d[jx - 1][1], d[jx - 1][2]);
        d[jx][1] = Math.max(d[jx - 1][0], d[jx - 1][2]) + parseInt(stickerMap[0][jx]);
        d[jx][2] = Math.max(d[jx - 1][0], d[jx - 1][1]) + parseInt(stickerMap[1][jx]);
    }

    console.log(Math.max(d[numberN - 1][0], d[numberN - 1][1], d[numberN - 1][2]));
}


