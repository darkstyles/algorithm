var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Graph/11724.txt'), 'utf8').toString().split('\n');

var inputSplit = inputs[0].split(' ');
var n = inputSplit[0];
var m = inputSplit[1];
var list = [];
var visited = [];
var connectedCount = 0;
var rs, start, end;
var ix;


var dfs = function (index) {
    var ix, nextIndex;

    visited[index] = true;

    for (ix = 0; ix < list[index].length; ix++) {
        nextIndex = list[index][ix];
        if (!visited[nextIndex]) {
            dfs(nextIndex);
        }
    }
};

var bfs = function (start) {
    var queue = [];
    var ix, nodeIndex, nextIndex;

    visited[start] = true;
    queue.push(start);

    while(queue.length) {
        nodeIndex = queue.shift();
        for (ix = 0; ix < list[nodeIndex].length; ix++) {
            nextIndex = list[nodeIndex][ix];
            if (!visited[nextIndex]) {
                visited[nextIndex] = true;
                queue.push(nextIndex);
            }
        }
    }
};

for (ix = 1; ix <= n; ix++) {
    list[ix] = [];
}

for (ix = 0; ix < m; ix++) {
    rs = inputs[ix + 1].split(' ');
    start = rs[0];
    end = rs[1];

    list[start].push(end);
    list[end].push(start);
}


for (ix = 1; ix <= n; ix++) {
    if (!visited[ix]) {
        // dfs(ix);
        bfs(ix);
        connectedCount++;
    }
}

console.log(connectedCount);