var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/10971.txt'), 'utf8').toString().trim().split('\n');

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
var ix, jx, isExist, expense, min, sum, distances = [], permutation = [];
var row;

for (ix = 0; ix < inputs.length - 1; ix++) {
    row = inputs[ix + 1].split(' ');
    distances[ix] = [];
    for (jx = 0; jx < row.length; jx++) {
        if (row[jx]) {
            distances[ix].push(parseInt(row[jx]));
        }
    }
}

for (ix = 0; ix < inputN; ix++) {
    permutation.push(ix);
}

do {
    sum = 0;
    isExist = false;
    for (ix = 0; ix < permutation.length - 1; ix++) {
        expense = distances[permutation[ix]][permutation[ix + 1]];
        if (expense) {
            sum += expense;
        } else {
            isExist = true;
        }
    }

    if (!isExist && distances[permutation[inputN - 1]][permutation[0]]) {
        sum += distances[permutation[inputN - 1]][permutation[0]];
        if (!min || sum < min) {
            min = sum;
        }
    }

    permutation = nextPermutation(permutation, inputN);
} while (permutation);

console.log(min);