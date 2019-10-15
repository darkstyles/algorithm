var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BFS/2206.txt'), 'utf8').toString().trim().split('\n');

var split = inputs[0].split(' ');
var n = parseInt(split[0]);
var m = parseInt(split[1]);

var queue = [];
var list = [];
var dist = [];
var logText = '-1';
var ix, jx, pos, nextX, nextY, z;

for (ix = 1; ix <= n; ix++) {
    split = inputs[ix].split('');
    list[ix] = [];
    dist[ix] = [];
    for (jx = 1; jx <= m; jx++) {
        list[ix][jx] = parseInt(split[jx - 1]);
        dist[ix][jx] = [];
    }
}

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];

queue.push({x: 1, y: 1, z: 0});
dist[1][1][0] = 1;

while (queue.length) {
    pos = queue.shift();
    z = pos.z;
    for (ix = 0; ix < 4; ix++) {
        nextX = pos.x + dy[ix];
        nextY = pos.y + dx[ix];
        if (nextX > 0 && nextX <= n && nextY > 0 && nextY <= m) {
            if (!list[nextX][nextY] && !dist[nextX][nextY][z]) {
                dist[nextX][nextY][z] = dist[pos.x][pos.y][z] + 1;
                queue.push({x: nextX, y: nextY, z: z});
            }

            if (!z && list[nextX][nextY] && !dist[nextX][nextY][z + 1]) {
                dist[nextX][nextY][z + 1] = dist[pos.x][pos.y][z] + 1;
                queue.push({x: nextX, y: nextY, z: z + 1});
            }
        }
    }
}

if (dist[n][m][0] && dist[n][m][1]) {
    logText = Math.min(dist[n][m][0], dist[n][m][1]);
} else if (dist[n][m][0]) {
    logText = dist[n][m][0];
} else if (dist[n][m][1]) {
    logText = dist[n][m][1];
}

console.log(logText);