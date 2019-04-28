var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/14888.txt'), 'utf8').toString().trim().split('\n');

var calculate = function (numbers, index, currSum, plus, sub, mul, div) {
    var results = [];
    var calcResult;
    if (index === numbers.length) {
        return {
            min: currSum,
            max: currSum
        }
    }

    if (plus > 0) {
        results.push(calculate(numbers, index + 1, currSum + numbers[index], plus - 1, sub, mul, div));
    }

    if (sub > 0) {
        results.push(calculate(numbers, index + 1, currSum - numbers[index], plus, sub - 1, mul, div));
    }

    if (mul > 0) {
        results.push(calculate(numbers, index + 1, currSum * numbers[index], plus, sub, mul - 1, div));
    }

    if (div > 0) {
        calcResult = Math.floor(Math.abs(currSum) / Math.abs(numbers[index]));
        if (currSum < 0 || numbers[index] < 0) {
            calcResult = -(calcResult);
        }
        results.push(calculate(numbers, index + 1, calcResult, plus, sub, mul, div - 1));
    }

    var ans = results[0];
    var ix, temp;
    for (ix = 1; ix < results.length; ix++) {
        temp = results[ix];
        if (ans.min > temp.min) {
            ans.min = temp.min;
        }

        if (ans.max < temp.max) {
            ans.max = temp.max;
        }
    }

    return ans;

};



var inputNumbers = inputs[1].split(' ').map(function (number) {
    return parseInt(number);
});
var operators = inputs[2].split(' ').map(function (operator) {
    return parseInt(operator);
});


var result = calculate(inputNumbers, 1, inputNumbers[0], operators[0], operators[1], operators[2], operators[3]);


if (result.min < -1000000000) {
    result.min = -1000000000;
}

if (result.max > 1000000000) {
    result.max = 1000000000;
}

console.log(result.max);
console.log(result.min);