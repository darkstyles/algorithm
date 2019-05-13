var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Graph/1707.txt'), 'utf8').toString().trim().split('\n');

var testCount = parseInt(inputs[0]);
var list = [];
var colors = [];
var logText = '';
var isBinGraph;
var nodeCount, lineCount, rs, start, end;
var ix, jx, kx, split, next;

var bfs = function (start) {
    var queue = [];
    var color = 1;
    var ix, nodeIndex, nextIndex;

    colors[start] = color;
    queue.push(start);

    while(queue.length) {
        nodeIndex = queue.shift();
        color = 3 - colors[nodeIndex];
        for (ix = 0; ix < list[nodeIndex].length; ix++) {
            nextIndex = list[nodeIndex][ix];

            if (colors[nextIndex] === colors[nodeIndex]) {
                return false;
            }

            if (!colors[nextIndex]) {
                colors[nextIndex] = color;
                queue.push(nextIndex);
            }

        }

    }

    return true;
};

var inputIndex = 1;

for (ix = 0; ix < testCount; ix++) {
    list = [];
    colors = [];
    isBinGraph = true;
    split = inputs[inputIndex].split(' ');
    nodeCount = parseInt(split[0]);
    lineCount = parseInt(split[1]);

    for (jx = 1; jx <= nodeCount; jx++) {
        list[jx] = [];
    }

    for (jx = 1; jx <= lineCount; jx++) {
        rs = inputs[inputIndex + jx].split(' ');
        start = parseInt(rs[0]);
        end = parseInt(rs[1]);

        list[start].push(end);
        list[end].push(start);
    }

    for (jx = 1; jx <= nodeCount; jx++) {
        if (!colors[jx]) {
            if (!bfs(jx)) {
                isBinGraph = false;
            }
        }
    }

    if (isBinGraph) {
        logText += 'YES\n';
    } else {
        logText += 'NO\n';
    }

    inputIndex += lineCount + 1;
}

console.log(logText);