var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/1182.txt'), 'utf8').toString().trim().split('\n');


var partSum = function (numbers, goal, index, sum) {
    if (index === numbers.length) {
        if (sum === goal) {
            return 1;
        } else {
            return 0;
        }
    }

    return partSum(numbers, goal, index + 1, sum + numbers[index]) +
        partSum(numbers, goal, index + 1, sum);
};

var splits = inputs[0].split(' ');
var N = parseInt(splits[0]);
var S = parseInt(splits[1]);
var numbers = inputs[1].split(' ').map(function (item) {
    var number = parseInt(item);

    if (number < -100000) {
        number = -100000;
    }

    if (number > 100000) {
        number = 100000
    }

    return number;
});

if (S < -1000000) {
    S = -1000000;
}

if (S > 1000000) {
    S = 1000000;
}

var result = partSum(numbers.slice(0, N), S, 0, 0);

if (S === 0) {
    result -= 1;
}

console.log(result);
