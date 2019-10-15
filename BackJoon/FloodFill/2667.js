var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('FloodFill/2667.txt'), 'utf8').toString().trim().split('\n');

var dx = [1, -1, 0, 0];
var dy = [0, 0, 1, -1];
var bfs = function (posX, posY, addr) {
    var queue = [];
    var nextPos, nextX, nextY, ix;

    queue.push({x: posX, y: posY});
    visited[posX][posY] = addr;
    parts[addr - 1] += 1;

    while(queue.length) {
        nextPos = queue.shift();
        for (ix = 0; ix < 4; ix++) {
            nextX = nextPos.x + dx[ix];
            nextY = nextPos.y + dy[ix];
            if (nextX >= 0 && nextX < numberN && nextY >= 0 && nextY < numberN) {
                if (!visited[nextX][nextY] && list[nextX][nextY]) {
                    parts[addr - 1] += 1;
                    visited[nextX][nextY] = addr;
                    queue.push({x: nextX, y: nextY});
                }
            }
        }
    }
};

var numberN = parseInt(inputs[0]);
var list = [];
var visited = [];
var parts = [];
var partIndex = 0;
var logText = '';
var ix, jx, split;

for (ix = 0; ix < numberN; ix++) {
    split = inputs[ix + 1].split('');
    if (!list[ix]) {
        list[ix] = [];
        visited[ix] = [];
    }

    for (jx = 0; jx < numberN; jx++) {
        list[ix][jx] = parseInt(split[jx]);
        visited[ix][jx] = 0;
    }
}

for (ix = 0; ix < numberN; ix++) {
    for (jx = 0; jx < numberN; jx++) {
        if (list[ix][jx] && !visited[ix][jx]) {
            parts[partIndex] = 0;
            bfs(ix, jx, ++partIndex);
        }
    }
}

console.log(partIndex);

parts.sort(function (a, b) {
    return a - b;
});
for (ix = 0; ix < parts.length; ix++) {
   logText += parts[ix] + '\n';
}

console.log(logText);