var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15666.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0].split(' ')[0]);
var numberM = parseInt(inputs[0].split(' ')[1]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var seq = [], result = [], logText = '';

var makeSeq = function (index, start, n, m) {
    if (index === m) {
        result.push(seq.join(' '));
        return;
    }

    var ix;
    for (ix = start; ix < n; ix++) {
        seq[index] = numbers[ix];
        makeSeq(index + 1, ix, n, m);
    }
};

numbers.sort(function (a, b) { return a - b });
makeSeq(0, 0, numberN, numberM);

var ix, logs = [];
for (ix = 0; ix < result.length; ix++) {
    if (logs.indexOf(result[ix]) === -1) {
        logs.push(result[ix]);
        logText += result[ix] + '\n';
    }
}

console.log(logText);