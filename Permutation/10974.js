var path = require('path');
var input = require('fs').readFileSync(path.resolve('Permutation/10974.txt'), 'utf8').toString().trim();

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

var inputN = parseInt(input);
var permutation = [];
var ix;

for (ix = 0; ix < inputN; ix++) {
    permutation.push(ix + 1);
}

do {
    console.log(permutation.join(' '));
    permutation = nextPermutation(permutation, inputN);
} while (permutation);