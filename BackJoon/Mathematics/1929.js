var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Mathematics/1929.txt'), 'utf8').toString().split(' ');

var eratos = function (n) {
    var check = [];
    var ix, jx;
    for (ix = 2; ix <= n; ix++) {
        if (!check[ix]) {
            for (jx = ix * ix; jx <= n; jx += ix) {
                check[jx] = true;
            }
        }
    }

    return check;
};


var numberM = parseInt(inputs[0]);
var numberN = parseInt(inputs[1]);

if (numberM === 1) numberM++;
if (numberN > 1000000) numberN = 1000000;

var ix;
var primes = eratos(numberN);
for (ix = numberM; ix <= numberN; ix++) {
    if (!primes[ix]) {
        console.log(ix);
    }
}