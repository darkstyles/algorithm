var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Graph/1707.txt'), 'utf8').toString().split('\n');

var testCount = parseInt(inputs[0]);
var list = [];
var colors = [];
var logText = '';
var isBinGraph;
var nodeCount, lineCount, rs, start, end;
var ix, jx, split;


var dfs = function (index, color) {
    var ix, nextIndex;

    colors[index] = color;

    for (ix = 0; ix < list[index].length; ix++) {
        nextIndex = list[index][ix];
        if (!colors[nextIndex]) {
            if (!dfs(nextIndex, 3 - color)) {
                return false;
            }
        } else if (colors[nextIndex] === colors[index]) {
            return false;
        }
    }

    return true;
};

var inputIndex = 1;

for (ix = 0; ix < testCount; ix++) {
    split = inputs[inputIndex].split(' ');
    nodeCount = parseInt(split[0]);
    lineCount = parseInt(split[1]);

    list.length = 0;
    for (jx = 1; jx <= nodeCount; jx++) {
        list[jx] = [];
    }

    for (jx = 1; jx <= lineCount; jx++) {
        rs = inputs[inputIndex + jx].split(' ');
        start = rs[0];
        end = rs[1];

        list[start].push(end);
        list[end].push(start);
    }

    colors.length = 0;
    isBinGraph = true;
    for (jx = 1; jx <= nodeCount; jx++) {
        if (!colors[jx]) {
            if (!dfs(jx, 1)) {
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