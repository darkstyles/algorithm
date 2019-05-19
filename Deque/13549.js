var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Deque/13549.txt'), 'utf8').toString().trim().split(' ');

var n = parseInt(inputs[0]);
var k = parseInt(inputs[1]);

var queue = [];
var check = [];
var time = [];
var now;

queue.push(n);
check[n] = true;
time[n] = 0;

while (queue.length) {
    now = queue.shift();
    if (now * 2 < 100001) {
        if (!check[now * 2]) {
            check[now * 2] = true;
            time[now * 2] = time[now];
            queue.unshift(now * 2);
        }
    }

    if (now + 1 < 100001) {
        if (!check[now + 1]) {
            check[now + 1] = true;
            time[now + 1] = time[now] + 1;
            queue.push(now + 1);
        }
    }

    if (now - 1 > -1) {
        if (!check[now - 1]) {
            check[now - 1] = true;
            time[now - 1] = time[now] + 1;
            queue.push(now - 1);
        }
    }
}

console.log(time[k]);