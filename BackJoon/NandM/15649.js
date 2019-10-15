var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NandM/15649.txt'), 'utf8').toString().trim().split(' ');

var numberN = parseInt(inputs[0]);
var numberM = parseInt(inputs[1]);
var ix, check = [], seq = [], logs = [];

var makeSeq = function (index, n, m) {
    var ix;
    if (index === m) {
        logs.push(seq.join(' '));
        return;
    }

    for (ix = 1; ix <= n; ix++) {
        if (check[ix]) continue;

        check[ix] = true;
        seq[index] = ix;

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

makeSeq(0, numberN, numberM);

for (ix = 0; ix < logs.length; ix++) {
    console.log(logs[ix]);
}