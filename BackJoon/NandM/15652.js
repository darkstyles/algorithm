var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15650.txt'), 'utf8').toString().trim().split(' ');

var numberN = parseInt(inputs[0]);
var numberM = parseInt(inputs[1]);
var seq = [], logText = '';

var makeSeq = function (index, selected, n, m) {
    if (selected === m) {
        logText += seq.join(' ') + '\n';
        return;
    }

    if (index > n) return;
    seq[selected] = index;
    makeSeq(index, selected + 1, n, m);
    makeSeq(index + 1, selected, n, m);
};

if (numberM < 1) {
    numberM = 1;
}

if (numberN < numberM) {
    numberN = numberM;
}

if (numberN > 8) {
    numberN = 8;
}

makeSeq(1, 0, numberN, numberM);

console.log(logText);
