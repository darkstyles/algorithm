var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('Recursive/1759.txt'), 'utf8').toString().trim().split('\n');


var checkPassword = function (password) {
    var vowels = 0;
    var consonants = 0;

    password.split('').forEach(function (char) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels += 1;
        } else {
            consonants += 1;
        }
    });

    return vowels >= 1 && consonants >= 2;
};
var makePassword = function (makeLength, characters, password, index) {
    if (password.length === makeLength) {
        if (checkPassword(password)) {
            console.log(password);
        }
        return;
    }

    if (index < characters.length) {
        makePassword(makeLength, characters, password + characters[index], index + 1);
        makePassword(makeLength, characters, password, index + 1);
    }

};

var splits = inputs[0].split(' ');
var passwordLength = parseInt(splits[0]);
var stringLength = parseInt(splits[1]);
var inputString = inputs[1].split(' ');

if (passwordLength < 3) {
    passwordLength = 3;
}

if (passwordLength > stringLength) {
    passwordLength = stringLength;
}

if (stringLength < passwordLength) {
    stringLength = passwordLength;
}

if (stringLength > 15) {
    stringLength = 15;
}


makePassword(passwordLength, inputString.slice(0, stringLength), '', 0);


