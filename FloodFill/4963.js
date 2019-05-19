var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('FloodFill/4963.txt'), 'utf8').toString().trim().split('\n');

var dx = [1, -1, 0, 0, 1, 1, -1, -1];
var dy = [0, 0, 1, -1, -1, 1, 1, -1];
var bfs = function (posX, posY) {
    var queue = [];
    var nextPos, nextX, nextY, ix;

    queue.push({x: posX, y: posY});
    visited[posX][posY] = true;

    while(queue.length) {
        nextPos = queue.shift();
        for (ix = 0; ix < 8; ix++) {
            nextX = nextPos.x + dx[ix];
            nextY = nextPos.y + dy[ix];
            if (nextX >= 0 && nextX < height && nextY >= 0 && nextY < width) {
                if (!visited[nextX][nextY] && list[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    queue.push({x: nextX, y: nextY});
                }
            }
        }
    }
};

var list = [];
var visited = [];
var land = 0;
var logText = '';
var width, height;
var ix, jx, kx, split;

for (ix = 0; ix < inputs.length; ix++) {
    list = [];
    visited = [];
    land = 0;
    split = inputs[ix].split(' ');
    width = parseInt(split[0]);
    height = parseInt(split[1]);


    for (jx = 0; jx < height; jx++) {
        list[jx] = [];
        visited[jx] = [];
        split = inputs[ix + jx + 1].split(' ');
        for (kx = 0; kx < width; kx++) {
            list[jx][kx] = parseInt(split[kx]);
            visited[jx][kx] = 0;
        }
    }

    for (jx = 0; jx < height; jx++) {
        for (kx = 0; kx < width; kx++) {
            if (list[jx][kx] && !visited[jx][kx]) {
                bfs(jx, kx, ++land);
            }
        }
    }

    if (width && height) {
        logText += land + '\n';
        ix += height;
    }
}

console.log(logText);