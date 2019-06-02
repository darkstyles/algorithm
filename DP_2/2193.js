var path = require('path');
var input = require('fs').readFileSync(path.resolve('DP_2/2193.txt'), 'utf8').toString().trim();

var numberN = parseInt(input);
var d = [];
var ix;

d[1] = [];
d[1][0] = 0;
d[1][1] = 1;

for (ix = 2; ix <= numberN; ix++) {
    d[ix] = [];
    d[ix][0] = add(d[ix - 1][0] + '', d[ix - 1][1] + '');
    d[ix][1] = d[ix - 1][0];
}

console.log(add(d[numberN][0] + '', d[numberN][1] + ''));


function add(str1, str2) {

    var sum = "";  // our result will be stored in a string.

    // we'll need these in the program many times.
    var str1Length = str1.length;
    var str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        var temp = str2;
        str2 = str1;
        str1 = temp;
    }

    var carry = 0;  // number that is carried to next decimal place, initially zero.
    var a;
    var b;
    var temp;
    var digitSum;
    for (var i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
        b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
        b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1);            //
        carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum;
}