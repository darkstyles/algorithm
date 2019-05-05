var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BitMask/11723.txt'), 'utf8').toString().trim().split('\n');


var S = 0;
var logText = '';
var calc = function (method, numberX, numberS) {
    var result = numberS;

    switch (method) {
        case 'add':
            result |= (1 << numberX);
            break;
        case 'remove':
            result &= ~(1 << numberX);
            break;
        case 'check':
            if (numberS & (1 << numberX)) {
                logText += '1\n';
            } else {
                logText += '0\n'
            }
            break;
        case 'toggle':
            result ^= (1 << numberX);
            break;
        case 'all':
            result = (1 << 21) - 1;
            break;
        case 'empty':
            result = 0;
            break;
        default:
            break;
    }

    return result;
};

var calcCount = parseInt(inputs[0]);
var ix, lineCalc;

for (ix = 1; ix < calcCount + 1; ix++) {
    lineCalc = inputs[ix].split(' ');
    S = calc(lineCalc[0], parseInt(lineCalc[1]), S);
}

console.log(logText);