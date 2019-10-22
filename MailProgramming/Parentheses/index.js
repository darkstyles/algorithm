const path = require('path');
const input = require('fs').readFileSync(path.resolve('MailProgramming/Parentheses/input.txt'), 'utf8').toString().trim();

function parentheses(openCnt, closeCnt, str) {
    if (!openCnt && !closeCnt) {
        console.log(str);
    }

    if (openCnt > 0) {
        parentheses(openCnt - 1, closeCnt + 1, str + '(');
    }

    if (closeCnt > 0) {
        parentheses(openCnt, closeCnt - 1, str + ')');
    }
}

parentheses(parseInt(input), 0, '');