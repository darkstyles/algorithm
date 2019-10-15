var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/6603.txt'), 'utf8').toString().trim().split('\n');

var lotto;
var ix;
var row;
var chooseNumber = function (numbers, index, chooseCount) {
    if (chooseCount === 6) {
        console.log(lotto.join(' '));
    }

    if (numbers.length === index) return;

    lotto.push(numbers[index]);
    chooseNumber(numbers, index + 1, chooseCount + 1);
    lotto.pop();
    chooseNumber(numbers, index + 1, chooseCount);
};

for (ix = 0; ix < inputs.length - 1; ix++) {
    lotto = [];
    row = inputs[ix].split(' ').map(function (item) {
        return parseInt(item);
    });

    chooseNumber(row.slice(1, row.length), 0, 0);
    console.log('');
}

