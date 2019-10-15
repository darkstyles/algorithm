var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15654.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0].split(' ')[0]);
var numberM = parseInt(inputs[0].split(' ')[1]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var check = [], seq = [], logText = '';

var makeSeq = function (index, n, m) {
    var ix;
    if (index === m) {
        logText += seq.join(' ') + '\n';
        return;
    }

    for (ix = 0; ix < n; ix++) {
        if (check[ix]) continue;

        check[ix] = true;
        seq[index] = numbers[ix];

        makeSeq(index + 1, n, m);

        check[ix] = false;
    }
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

numbers.sort(function (a, b) { return a - b });
makeSeq(0, numberN, numberM);

console.log(logText);
