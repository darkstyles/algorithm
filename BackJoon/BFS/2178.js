var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BFS/2178.txt'), 'utf8').toString().trim().split('\n');

var split = inputs[0].split(' ');
var n = parseInt(split[0]);
var m = parseInt(split[1]);
var list = [];
var dist = [];
var queue = [];
var ix, jx, nextPos, nextX, nextY;

for (ix = 1; ix <= n; ix++) {
    list[ix] = [];
    dist[ix] = [];
    split = inputs[ix].split('');
    for (jx = 1; jx <= m; jx++) {
        list[ix][jx] = parseInt(split[jx - 1]);
        dist[ix][jx] = 0;
    }
}

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];

queue.push({x: 1, y: 1});
dist[1][1] = 1;

while (queue.length) {
    nextPos = queue.shift();
    for (ix = 0; ix < 4; ix++) {
        nextX = nextPos.x + dy[ix];
        nextY = nextPos.y + dx[ix];
        if (nextX > 0 && nextX <= n && nextY > 0 && nextY <= m) {
            if (!dist[nextX][nextY] && list[nextX][nextY]) {
                dist[nextX][nextY] = dist[nextPos.x][nextPos.y] + 1;
                queue.push({x: nextX, y: nextY});
            }
        }
    }
}

console.log(dist[n][m]);