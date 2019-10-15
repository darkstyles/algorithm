var path = require('path');
var input = require('fs').readFileSync(path.resolve('BFS/14226.txt'), 'utf8').toString().trim();

var s = parseInt(input);
var check = [];
var ix, jx, next, nextS, nextC;

for (ix = 0; ix <= s; ix++) {
    check[ix] = [];
    for (jx = 0; jx <= s; jx++) {
        check[ix][jx] = -1;
    }
}

var queue = [];

queue.push({s: 1, c: 0});
check[1][0] = 0;

while(queue.length) {
    next = queue.shift();
    nextS = next.s;
    nextC = next.c;
    if (check[nextS][nextS] === -1) {
        check[nextS][nextS] = check[nextS][nextC] + 1;
        queue.push({s: nextS, c: nextS});
    }

    if (nextS + nextC <= s && check[nextS + nextC][nextC] === -1) {
        check[nextS + nextC][nextC] = check[nextS][nextC] + 1;
        queue.push({s: nextS + nextC, c: nextC});
    }

    if (nextS - 1 >= 0 && check[nextS - 1][nextC] === -1) {
        check[nextS - 1][nextC] = check[nextS][nextC] + 1;
        queue.push({s: nextS - 1, c: nextC});
    }
}

var ans = -1;
for (ix = 0; ix <= s; ix++) {
    if (check[s][ix] !== -1) {
       if (ans === -1 || ans > check[s][ix]) {
           ans = check[s][ix];
       }
    }
}

console.log(ans);