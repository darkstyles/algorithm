var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/14501.txt'), 'utf8').toString().trim().split('\n');


var work = function (day, sum) {
    if (day > quitDay) {
        return;
    }

    if (day === quitDay) {
        return sum
    }

    var meeting = schedule[day];
    var currSum = work(day + meeting.day, sum + meeting.incentive);
    if (!currSum) {
        currSum = sum;
    }

    var nextSum = work(day + 1, sum);
    if (!nextSum) {
        nextSum = sum;
    }

    return Math.max(currSum, nextSum);
};

var schedule = [];
var quitDay = parseInt(inputs[0]);
var ix, meeting;

for (ix = 1; ix < quitDay + 1; ix++) {
    meeting = inputs[ix].split(' ');
    schedule.push({
        day: parseInt(meeting[0]),
        incentive: parseInt(meeting[1]),
    })
}

console.log(work(0, 0));