var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BruteForce/2309.txt'), 'utf8').toString().split('\n');

var ix, jx, kx, input, isFound = false, sum = 0, dwarfs = [];

for (ix = 0; ix < inputs.length; ix++) {
    input = parseInt(inputs[ix]);
    dwarfs.push(input);
    sum += input;
}

dwarfs.sort(function(a, b) {
    return a - b;
});

for (ix = 0; ix < dwarfs.length; ix++) {
    for (jx = ix + 1; jx < dwarfs.length; jx++) {
        if (sum - dwarfs[ix] - dwarfs[jx] === 100) {
            for (kx = 0; kx < dwarfs.length; kx++) {
                if (kx === ix || kx === jx) continue;
                console.log(dwarfs[kx]);
            }
            isFound = true;
            break;
        }
    }

    if (isFound) break;
}