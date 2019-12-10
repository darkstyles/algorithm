const maze = function(map, start, end) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];
    const dist = [];
    const endX = end[0];
    const endY = end[1];
    const maxX = map.length - 1;
    const maxY = map[0].length - 1;
    let nextX;
    let nextY;
    let pos;

    for(let ix = 0; ix < map.length; ix++) {
        dist[ix] = [];
    }

    queue.push({x: start[1], y: start[0]});
    dist[start[1]][start[0]] = 0;

    while (queue.length) {
        pos = queue.shift();
        for (let ix = 0; ix < 4; ix++) {
            nextX = pos.x + dy[ix];
            nextY = pos.y + dx[ix];
            if (nextX > -1 && nextX <= maxX && nextY > -1 && nextY <= maxY) {
                if (map[nextX][nextY] && !dist[nextX][nextY]) {
                    dist[nextX][nextY] = dist[pos.x][pos.y] + 1;
                    queue.push({x: nextX, y: nextY});
                }
            }
        }
    }

    return dist[endX][endY] || 0;
};

const array = [
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
];

const startPos = [0, 2];
const endPos = [0, 4];

console.log(maze(array, startPos, endPos));