var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Graph/1260.txt'), 'utf8').toString().split('\n');

var inputSplit = inputs[0].split(' ');
var n = inputSplit[0];
var m = inputSplit[1];
var startNode = inputSplit[2];
var list = [];
var visited = [];
var logs = [];
var rs, start, end;
var ix;


var dfs = function (index) {
    var ix, nextIndex;

    visited[index] = true;
    logs.push(index);

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
        logs.push(nodeIndex);
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
    list[ix].sort(function (a, b) {
        return a - b;
    })
}

dfs(startNode);
console.log(logs.join(' '));

logs.length = 0;
visited.length = 0;
bfs(startNode);
console.log(logs.join(' '));
