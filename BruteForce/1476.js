var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BruteForce/1476.txt'), 'utf8').toString().split(' ');

var E = parseInt(inputs[0]) - 1;
var S = parseInt(inputs[1]) - 1;
var M = parseInt(inputs[2]) - 1;
var ix = 0;

while(1) {
    if (ix % 15 === E && ix % 28 === S && ix % 19 === M) {
        console.log(ix + 1);
        break;
    }

    ix++;
}