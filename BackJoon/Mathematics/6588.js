var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Mathematics/6588.txt'), 'utf8').toString().trim().split('\n');

var eratos = function (n) {
    var check = [];
    var ix, jx;

    for (ix = 3; ix <= n; ix++) {
        if (!check[ix]) {
            for (jx = ix * 2; jx <= n; jx += ix) {
                check[jx] = true;
            }
        }
    }

    return check;
};

var ix, jx, input;
var primes = eratos(1000000);
for (ix = 0; ix < inputs.length; ix++) {
    input = parseInt(inputs[ix]);

    if (input < 6 || input > 1000000) {
        continue;
    }

    for (jx = 3; jx < input; jx+=2) {
        if (!primes[jx] && !primes[input - jx]) {
            console.log(input + ' = ' + jx + ' + ' + (input - jx));
            break;
        }
    }
}