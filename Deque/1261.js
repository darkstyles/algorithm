var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Deque/1261.txt'), 'utf8').toString().trim().split('\n');

var split = inputs[0].split(' ');
var n = parseInt(split[0]);
var m = parseInt(split[1]);
var queue = [];
var list = [];
var visited = [];
var dist = [];
var ix, jx, nextX, nextY, pos;

for (ix = 1; ix <= m; ix++) {
    list[ix] = [];
    visited[ix] = [];
    dist[ix] = [];
    split = inputs[ix].split('');
    for (jx = 1; jx <= n; jx++) {
        list[ix][jx] = parseInt(split[jx - 1]);
        visited[ix][jx] = false;
        dist[ix][jx] = 0;
    }
}

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];

queue.push({x: 1, y: 1});
visited[1][1] = true;
dist[1][1] = 0;

while (queue.length) {
    pos = queue.shift();
    for (ix = 0; ix < 4; ix++) {
        nextX = pos.x + dy[ix];
        nextY = pos.y + dx[ix];
        if (nextX > 0 && nextX <= m && nextY > 0 && nextY <= n) {
            if (!visited[nextX][nextY]) {
                visited[nextX][nextY] = true;
                if (list[nextX][nextY]) {
                    dist[nextX][nextY] = dist[pos.x][pos.y] + 1;
                    queue.push({x: nextX, y: nextY});
                } else {
                    dist[nextX][nextY] = dist[pos.x][pos.y];
                    queue.unshift({x: nextX, y: nextY});
                }
            }
        }
    }
}

console.log(dist[m][n]);