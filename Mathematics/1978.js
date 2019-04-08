var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Mathematics/1978.txt'), 'utf8').toString().split('\n');

var prime = function (n) {
    var ix;
    if (n < 2) {
        return false;
    }

    for (ix = 2; ix * ix <= n; ix++) {
        if (n % ix === 0) {
            return false;
        }
    }
    return true;
};

var count = parseInt(inputs[0]);
var numbers = inputs[1].split(' ');
var ix, primeCount = 0;

for (ix = 0; ix < numbers.length; ix++) {
    if (prime(parseInt(numbers[ix]))) {
        primeCount++;
    }
}

console.log(primeCount);