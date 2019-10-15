var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('DP/11052.txt'), 'utf8').toString().trim().split('\n');

var n = parseInt(inputs[0]);
var p = inputs[1].split(' ').map(function(num) {
    return parseInt(num);
});
var cost = [];
var ix, jx;

cost[0] = 0;
for (ix = 1; ix <= n; ix++) {
    for (jx = 1; jx <= ix; jx++) {
        cost[ix] = Math.max(cost[ix] || 0, p[jx - 1] + cost[ix - jx]);
    }
}

console.log(cost[n]);