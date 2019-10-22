const path = require('path');
const input = require('fs').readFileSync(path.resolve('MailProgramming/Palindrome/input.txt'), 'utf8').toString().trim();

function palindrome(n) {
    const length = Math.floor(Math.log10(n)) + 1;
    const numbers = [];
    let result = true;
    let remain;
    let divide;

    if (n < 0) {
        return false;
    } else if (n < 10) {
        return true;
    }

    remain = n;
    for (let ix = length - 1; ix >= 0; ix--) {
        divide = Math.pow(10, ix);
        numbers[ix] = Math.floor(remain / divide);
        remain = remain % divide;
    }

    for (let ix = 0; ix < length / 2; ix++) {
        if (!(numbers[ix] === numbers[length - 1 - ix])) {
            result = false;
            break;
        }
    }

    return result;
}

console.log(palindrome(parseInt(input)));