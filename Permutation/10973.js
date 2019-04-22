var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/10973.txt'), 'utf8').toString().trim().split('\n');

var prevPermutation = function (current, n) {
    var prev;
    var ix = n - 1, jx, temp;

    while (ix > 0 && current[ix - 1] <= current[ix]) {
        ix -= 1;
    }

    if (ix > 0) {
        prev = current.slice();
        jx = n - 1;
        while(prev[jx] >= prev[ix - 1]) {
            jx -= 1;
        }

        temp = prev[ix - 1];
        prev[ix - 1] = prev[jx];
        prev[jx] = temp;

        jx = n - 1;
        while(ix < jx) {
            temp = prev[ix];
            prev[ix] = prev[jx];
            prev[jx] = temp;
            ix += 1;
            jx -= 1;
        }
    }

    return prev;
};

var prev = prevPermutation(inputs[1].split(' ').map(function (item) {
    return parseInt(item);
}), parseInt(inputs[0]));

if (prev) {
    console.log(prev.join(' '));
} else {
    console.log(-1);
}