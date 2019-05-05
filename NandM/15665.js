var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15665.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0].split(' ')[0]);
var numberM = parseInt(inputs[0].split(' ')[1]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
}).sort(function (a, b) { return a - b });

var seq = [], cnt = [], logText = '';

var duplicate = function () {
    var ix, index = 0;
    var count = 1, prevValue = numbers[0];
    var result = [];

    for (ix = 1; ix < numbers.length; ix++) {
        if (prevValue === numbers[ix]) {
            count += 1;
        } else {
            result[index] = prevValue;
            cnt[index] = count;
            prevValue = numbers[ix];
            index += 1;
            count = 1;
        }
    }

    result[index] = prevValue;
    cnt[index] = count;

    return result;
};

var makeSeq = function (index, n, m) {
    var ix;
    if (index === m) {
        logText += seq.map(function (itemIndex) {
            return numbers[itemIndex];
        }).join(' ') + '\n';
        return;
    }

    for (ix = 0; ix < n; ix++) {
        seq[index] = ix;
        makeSeq(index + 1, n, m);
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

numbers = duplicate();
makeSeq(0, numbers.length, numberM);

console.log(logText);