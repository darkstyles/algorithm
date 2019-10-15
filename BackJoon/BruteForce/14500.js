var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BruteForce/14500.txt'), 'utf8').toString().split('\n');


var blocks = [
    [[0,1], [0,2], [0,3]],
    [[1,0], [2,0], [3,0]],
    [[1,0], [1,1], [1,2]],
    [[0,1], [1,0], [2,0]],
    [[0,1], [0,2], [1,2]],
    [[1,0], [2,0], [2,-1]],
    [[0,1], [0,2], [-1,2]],
    [[1,0], [2,0], [2,1]],
    [[0,1], [0,2], [1,0]],
    [[0,1], [1,1], [2,1]],
    [[0,1], [1,0], [1,1]],
    [[0,1], [-1,1], [-1,2]],
    [[1,0], [1,1], [2,1]],
    [[0,1], [1,1], [1,2]],
    [[1,0], [1,-1], [2,-1]],
    [[0,1], [0,2], [-1,1]],
    [[0,1], [0,2], [1,1]],
    [[1,0], [2,0], [1,1]],
    [[1,0], [2,0], [1,-1]],
];

var n = inputs[0].split(' ')[0];
var m = inputs[0].split(' ')[1];
var ix, jx, kx, lx, input, matric = [];

if (n < 4) {
    n = 4;
}

if (m > 500) {
    m = 500;
}

for (ix = 0; ix < n; ix++) {
    input = inputs[ix + 1].split(' ');
    matric[ix] = [];
    for (jx = 0; jx < m; jx++) {
        matric[ix][jx] = parseInt(input[jx]);
    }
}

var sum = 0, max = 0, block, posN, posM;

for (ix = 0; ix < n; ix++) {
    for (jx = 0; jx < m; jx++) {
        for (kx = 0; kx < blocks.length; kx++) {
            block = blocks[kx];
            sum = matric[ix][jx];
            for (lx = 0; lx < block.length; lx++) {
                posN = ix + block[lx][0];
                posM = jx + block[lx][1];
                if (posN >= 0 && posM >= 0 && posN < n && posM < m) {
                    sum += matric[posN][posM];
                } else {
                    break;
                }
            }

            if (lx === block.length && max < sum) {
                max = sum;
            }
        }
    }
}

console.log(max);
