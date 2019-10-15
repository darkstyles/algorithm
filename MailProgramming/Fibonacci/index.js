const path = require('path');
const input = require('fs').readFileSync(path.resolve('MailProgramming/Fibonacci/input.txt'), 'utf8').toString().trim();

function fibonacci(n) {
    let sum = 0;
    let fn1 = 0;
    let fn2 = 1;
    let fn;

    while (true) {
        fn = fn1 + fn2;
        if (fn >= n) {
            break;
        }

        if (fn % 2 === 0) {
            sum += fn;
        }

        [fn1, fn2] = [fn2, fn];
    }

    return sum;
}

console.log(fibonacci(parseInt(input)));