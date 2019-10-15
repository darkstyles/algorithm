var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/9095.txt'), 'utf8').toString().split('\n');

// var sum = function(prevSum, depth, num) {
//     var ix, count = 0;
//     for (ix = 1; ix <= 3; ix++) {
//         if (ix + prevSum === num) count++;
//         if (depth < 10) {
//             count += sum(ix + prevSum, depth + 1, num);
//         }
//     }
//
//     return count;
// };

var sumFn = function (sum, num) {
    if (sum > num) return 0;
    if (sum === num) return 1;

    var count = 0;
    var ix;
    for (ix = 1; ix <= 3; ix++) {
        count += sumFn(sum + ix, num);
    }

    return count;
};

var ix, num;

for (ix = 1; ix < inputs.length; ix++) {
    num = parseInt(inputs[ix]);
    if (num < 1 || num > 10) {
        continue;
    }

    console.log(sumFn(0, num));
    // console.log(sum(0, 0, num));
}
