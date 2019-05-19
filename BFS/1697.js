var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('BFS/1697.txt'), 'utf8').toString().trim().split(' ');

var n = parseInt(inputs[0]);
var k = parseInt(inputs[1]);

var queue = [];
var check = [];
var dist = [];
var now;

queue.push(n);
check[n] = true;
dist[n] = 0;

while(queue.length) {
    now = queue.shift();

    if (now - 1 >= 0) {
        if (!check[now - 1]) {
            check[now - 1] = true;
            dist[now - 1] = dist[now] + 1;
            queue.push(now - 1);
        }
    }

    if (now + 1 < 100000) {
        if (!check[now + 1]) {
            check[now + 1] = true;
            dist[now + 1] = dist[now] + 1;
            queue.push(now + 1);
        }
    }

    if (now * 2 < 100000) {
        if (!check[now * 2]) {
            check[now * 2] = true;
            dist[now * 2] = dist[now] + 1;
            queue.push(now * 2);
        }
    }
}

console.log(dist[k]);