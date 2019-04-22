var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/10972.txt'), 'utf8').toString().trim().split('\n');

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

var next = nextPermutation(inputs[1].split(' ').map(function (item) {
    return parseInt(item);
}), parseInt(inputs[0]));

if (next) {
    console.log(next.join(' '));
} else {
    console.log(-1);
}