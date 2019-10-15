var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BFS/3055.txt'), 'utf8').toString().trim().split('\n');

var split = inputs[0].split(' ');
var r = parseInt(split[0]);
var c = parseInt(split[1]);

var queue = [];
var list = [];
var waterDay = [];
var moveDay = [];
var logText = 'KAKTUS';
var ix, jx, startPos, destPos, pos, nextX, nextY;

for (ix = 1; ix <= r; ix++) {
    list[ix] = [];
    waterDay[ix] = [];
    moveDay[ix] = [];
    split = inputs[ix].split('');
    for (jx = 1; jx <= c; jx++) {
        list[ix][jx] = split[jx - 1];
        waterDay[ix][jx] = 0;
        moveDay[ix][jx] = 0;

        if (list[ix][jx] === '*') {
            queue.push({x: ix, y: jx});
        }

        if (list[ix][jx] === 'S') {
            startPos = {x: ix, y: jx};
        }

        if (list[ix][jx] === 'D') {
            destPos = {x: ix, y: jx};
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
        if (nextX > 0 && nextX <= r && nextY > 0 && nextY <= c) {
            if (!waterDay[nextX][nextY] && list[nextX][nextY] === '.') {
                waterDay[nextX][nextY] = waterDay[pos.x][pos.y] + 1;
                queue.push({x: nextX, y: nextY});
            }
        }
    }
    queueIndex++;
}

queue = [];
queue.push(startPos);
queueIndex = 0;

while (queue.length > queueIndex) {
    pos = queue[queueIndex];
    for (ix = 0; ix < 4; ix++) {
        nextX = pos.x + dy[ix];
        nextY = pos.y + dx[ix];
        if (nextX > 0 && nextX <= r && nextY > 0 && nextY <= c) {
            if (!moveDay[nextX][nextY] && (list[nextX][nextY] === '.' || list[nextX][nextY] === 'D')) {
                if (!waterDay[nextX][nextY]) {
                    moveDay[nextX][nextY] = moveDay[pos.x][pos.y] + 1;
                    queue.push({x: nextX, y: nextY});
                } else {
                    if (waterDay[nextX][nextY] > moveDay[pos.x][pos.y] + 1) {
                        moveDay[nextX][nextY] = moveDay[pos.x][pos.y] + 1;
                        queue.push({x: nextX, y: nextY});
                    }
                }
            }
        }
    }

    queueIndex++;
}

if (moveDay[destPos.x][destPos.y]) {
    logText = moveDay[destPos.x][destPos.y];
}

console.log(logText);