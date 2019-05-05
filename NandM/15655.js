var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15655.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0].split(' ')[0]);
var numberM = parseInt(inputs[0].split(' ')[1]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var seq = [], logText = '';

var makeSeq = function (index, selected, n, m) {
    if (selected === m) {
        logText += seq.join(' ') + '\n';
        return;
    }

    if (index >= n) return;
    seq[selected] = numbers[index];
    makeSeq(index + 1, selected + 1, n, m);
    seq[selected] = 0;
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

numbers.sort(function(a ,b) { return a - b });
makeSeq(0, 0, numberN, numberM);

console.log(logText);
