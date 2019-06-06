var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP_3/14002.txt'), 'utf8').toString().trim().split('\n');

var numberN = parseInt(inputs[0]);
var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});

var d = [];
var v = [];
var ix, jx;
var logs = [];

var go = function(p) {
    if (p === -1) {
        return ;
    }
    go(v[p]);
    logs.push(numbers[p]);
};

for (ix = 0; ix < numberN; ix++) {
    d[ix] = 1;
    v[ix] = -1;
    for (jx = 0; jx < ix; jx++) {
        if (numbers[jx] < numbers[ix] && d[ix] < d[jx] + 1) {
            d[ix] = d[jx] + 1;
            v[ix] = jx;
        }
    }
}

var result = d.reduce(function(acc, num, numIndex) {
    if (acc.max < num) {
        acc.max = num;
        acc.index = numIndex;
    }

    return acc;
}, {max: 0, index: 0});

go(result.index);

console.log(result.max + '\n' + logs.join(' '));