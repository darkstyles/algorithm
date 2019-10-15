var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15657.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0].split(' ')[0]);
var numberM = parseInt(inputs[0].split(' ')[1]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var check = [], seq = [], logText = '';

var makeSeq = function (index, start, n, m) {
    if (index === m) {
        logText += seq.join(' ') + '\n';
        return;
    }

    var ix;
    for (ix = start; ix < n; ix++) {
        check[ix] = true;
        seq[index] = numbers[ix];
        makeSeq(index + 1, ix, n, m);
        check[ix] = false;
    }
};

numbers.sort(function (a, b) { return a - b });
makeSeq(0, 0, numberN, numberM);

console.log(logText);