var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/6603.txt'), 'utf8').toString().trim().split('\n');

var nextPermutation = function (current, n) {
    var next;
    var ix = n - 1, jx, temp;

    while (ix > 0 && current[ix - 1] <= current[ix]) {
        ix -= 1;
    }

    if (ix > 0) {
        next = current.slice();
        jx = n - 1;
        while(next[jx] >= next[ix - 1]) {
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

var ix, jx, permutation = [];
var row, k, noCount, result;

for (ix = 0; ix < inputs.length - 1; ix++) {
    permutation = [];
    row = inputs[ix].split(' ').map(function (item) {
        return parseInt(item);
    });

    k = row[0];
    noCount = k - 6;
    for (jx = 0; jx < k; jx++) {
        if (jx > 5) {
            permutation.push(0);
        } else {
            permutation.push(1);
        }
    }

    do {
        result = [];
        for (jx = 0; jx < permutation.length; jx++) {
            if (permutation[jx]) {
                result.push(row[jx + 1]);
            }
        }

        console.log(result.join(' '));

        permutation = nextPermutation(permutation, permutation.length);
    } while (permutation);

    console.log('');
}

