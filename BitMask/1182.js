var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BitMask/1182.txt'), 'utf8').toString().trim().split('\n');

var conditions = inputs[0].split(' ');
var N = parseInt(conditions[0]);
var S = parseInt(conditions[1]);
var numbers = inputs[1].split(' ').map(function (item) {
    var number = parseInt(item);

    if (number < -100000) {
        number = -100000;
    }

    if (number > 100000) {
        number = 100000
    }

    return number;
});

if (S < -1000000) {
    S = -1000000;
}

if (S > 1000000) {
    S = 1000000;
}

var ix, jx, sum, result = 0;

for (ix = 1; ix < (1 << N); ix++) {
    sum = 0;
    for (jx = 0; jx < N; jx++) {
        if (ix & (1 << jx)) {
            sum += numbers[jx];
        }
    }

    if (sum === S) {
        result += 1;
    }
}

console.log(result);
