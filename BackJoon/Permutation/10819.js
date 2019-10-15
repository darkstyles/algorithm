var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/10819.txt'), 'utf8').toString().trim().split('\n');

var nextPermutation = function (current, n) {
    var next;
    var ix = n - 1, jx, temp;

    while (ix > 0 && current[ix - 1] >= current[ix]) {
        ix -= 1;
    }

    if (ix > 0) {
        next = current.slice();
        jx = n - 1;
        while(next[jx] <= next[ix - 1]) {
            jx -= 1;
        }

        temp = next[ix - 1];
        next[ix - 1] = next[jx];
        next[jx] = temp;

        jx = n - 1;
        while(ix < jx) {
            temp = next[ix];
            next[ix] = next[jx];
            next[jx] = temp;
            ix += 1;
            jx -= 1;
        }
    }

    return next;
};

var inputN = parseInt(inputs[0]);
var permutation = inputs[1].split(' ').map(function (item) {
    return parseInt(item);
});
var ix, maxSum = 0, sum;

permutation.sort(function (a, b) {
    return a - b;
});

do {
    sum = 0;
    for (ix = 0; ix < inputN - 1; ix++) {
        sum += Math.abs(permutation[ix] - permutation[ix + 1]);
    }

    if (maxSum < sum) {
        maxSum = sum;
    }

    permutation = nextPermutation(permutation, inputN);
} while (permutation);

console.log(maxSum);