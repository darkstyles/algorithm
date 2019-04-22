var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Permutation/14888.txt'), 'utf8').toString().trim().split('\n');

var prevPermutation = function (current, n) {
    var prev;
    var ix = n - 1, jx, temp;

    while (ix > 0 && current[ix - 1] >= current[ix]) {
        ix -= 1;
    }

    if (ix > 0) {
        prev = current.slice();
        jx = n - 1;
        while(prev[jx] <= prev[ix - 1]) {
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

var calculate = function (type, a, b) {
    var result;
    switch (type) {
        case 0:
            result = a + b;
            break;
        case 1:
            result = a - b;
            break;
        case 2:
            result = a * b;
            break;
        case 3:
            result = Math.floor(Math.abs(a) / Math.abs(b));
            if (a < 0 || b < 0) {
                result = -(result);
            }
            break;
    }

    return result;
};

var ix, jx, permutation = [];
var calc, min = 0, max = 0;

var numbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var operators = inputs[2].split(' ');

for (ix = 0; ix < operators.length; ix++) {
    for (jx = 0; jx < parseInt(operators[ix]); jx++) {
        permutation.push(ix);
    }
}

do {
    calc = numbers[0];
    for (ix = 0; ix < numbers.length - 1; ix++) {
        calc = calculate(permutation[ix], calc, numbers[ix + 1]);
    }

    if (calc < -1000000000) {
        calc = -1000000000;
    }

    if (calc > 1000000000) {
        calc = 1000000000;
    }

    if (calc < min) {
        min = calc;
    }

    if (calc > max) {
        max = calc;
    }

    permutation = prevPermutation(permutation, permutation.length);
} while (permutation);

console.log(max);
console.log(min);