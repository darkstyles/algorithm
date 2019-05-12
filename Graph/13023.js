var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Graph/13023.txt'), 'utf8').toString().split('\n');

var n = inputs[0].split(' ')[0];
var m = inputs[0].split(' ')[1];
var list = [];
var visited = [];
var isExist = false;
var rs, start, end;
var ix;

for (ix = 0; ix < n; ix++) {
    list[ix] = [];
}

for (ix = 0; ix < m; ix++) {
    rs = inputs[ix + 1].split(' ');
    start = rs[0];
    end = rs[1];

    list[start].push(end);
    list[end].push(start);
}

var dfs = function (depth, index) {
    var ix, next;
    if (depth === 5) {
        return true;
    }

    visited[index] = true;
    for (ix = 0; ix < list[index].length; ix++) {
        next = list[index][ix];
        if (visited[next]) continue;
        if (dfs(depth + 1, next)) {
            return true;
        }
    }
    visited[index] = false;

    return false;
};

for (ix = 0; ix < n; ix++) {
    if (dfs(1, ix)) {
        isExist = true;
    }
}

if (isExist) {
    console.log(1);
} else {
    console.log(0);
}