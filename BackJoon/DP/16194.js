var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP/16194.txt'), 'utf8').toString().trim().split('\n');

var n = parseInt(inputs[0]);
var p = inputs[1].split(' ').map(function(num) {
    return parseInt(num);
});
var cost = [];
var ix, jx;

for (ix = 0; ix <= n; ix++) {
    cost[ix] = 1000 * 10000;
}

cost[0] = 0;
for (ix = 1; ix <= n; ix++) {
    for (jx = 1; jx <= ix; jx++) {
        cost[ix] = Math.min(cost[ix], p[jx - 1] + cost[ix - jx]);
    }
}

console.log(cost[n]);