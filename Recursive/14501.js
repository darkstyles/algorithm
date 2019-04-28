var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/14501.txt'), 'utf8').toString().trim().split('\n');


var work = function (day, sum) {
    if (day > quitDay - 1) {
        return;
    }

    if (day === quitDay - 1) {
        return sum
    }

    var meeting = schedule[day];
    work(day + meeting.day, sum + meeting.incentive);
    work(day + 1, sum);
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

work(0, 0);