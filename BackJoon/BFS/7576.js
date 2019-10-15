var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BFS/7576.txt'), 'utf8').toString().trim().split('\n');

var split = inputs[0].split(' ');
var n = parseInt(split[0]);
var m = parseInt(split[1]);
var list = [];
var visited = [];
var dist = [];
var queue = [];
var unripeCnt = 0;
var day = 0;
var logText = '';
var ix, jx, pos, nextX, nextY;

for (ix = 1; ix <= m; ix++) {
    list[ix] = [];
    visited[ix] = [];
    dist[ix] = [];
    split = inputs[ix].split(' ');
    for (jx = 1; jx <= n; jx++) {
        list[ix][jx] = parseInt(split[jx - 1]);
        dist[ix][jx] = 0;
        if (list[ix][jx] === 0) {
            unripeCnt++;
        }

        if (list[ix][jx] === 1) {
            visited[ix][jx] = true;
            queue.push({x: ix, y: jx});
        }
    }
}

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var queueIndex = 0;
while (queue.length > queueIndex) {
    pos = queue[queueIndex];
    for (ix = 0; ix < 4; ix++) {
        nextX = pos.x + dy[ix];
        nextY = pos.y + dx[ix];
        if (nextX > 0 && nextX <= m && nextY > 0 && nextY <= n) {
            if (!visited[nextX][nextY] && !list[nextX][nextY]) {
                visited[nextX][nextY] = true;
                queue.push({x: nextX, y: nextY});
                dist[nextX][nextY] = dist[pos.x][pos.y] + 1;
                if (day < dist[nextX][nextY]) {
                    day = dist[nextX][nextY];
                }
                unripeCnt--;
            }
        }
    }
    queueIndex++;
}

if (unripeCnt) {
    logText = -1;
} else {
    logText = day;
}

console.log(logText);