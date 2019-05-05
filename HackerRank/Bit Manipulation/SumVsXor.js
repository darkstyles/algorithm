var path = require('path');
var input = require('fs').readFileSync(path.resolve('BitMask/SumVsXor.txt'), 'utf8').toString().trim();

function sumXor(n) {
    let number = n;
    let count = 0;
    const binary = number.toString(2);

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            count++;
        }
    }

    if (number === 0) {
        count = 0;
    }

    // while (number) {
    //     if ((number & 1) === 0) {
    //         count++;
    //     }

    //     number = number >> 1;
    // }

    return 1 << count;
}

console.log(sumXor(parseInt(input)));