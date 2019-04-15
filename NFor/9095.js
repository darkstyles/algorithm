var path = require('path');
var inputs = require('fs').readFileSync(path.resolve('NFor/9095.txt'), 'utf8').toString().split('\n');


var ix, num, l1, l2, l3, l4, l5, l6, l7, l8, l9, l0;
var count;

for (ix = 1; ix < inputs.length; ix++) {
    count = 0;
    num = parseInt(inputs[ix]);
    if (num < 1 || num > 10) {
        continue;
    }

    for (l1 = 1; l1 <= 3; l1++) {
        if (l1 === num) count++;
        for (l2 = 1; l2 <= 3; l2++) {
            if (l1 + l2 === num) count++;
            for (l3 = 1; l3 <= 3; l3++) {
                if (l1 + l2 + l3 === num) count++;
                for (l4 = 1; l4 <= 3; l4++) {
                    if (l1 + l2 + l3 + l4 === num) count++;
                    for (l5 = 1; l5 <= 3; l5++) {
                        if (l1 + l2 + l3 + l4 + l5 === num) count++;
                        for (l6 = 1; l6 <= 3; l6++) {
                            if (l1 + l2 + l3 + l4 + l5 + l6 === num) count++;
                            for (l7 = 1; l7 <= 3; l7++) {
                                if (l1 + l2 + l3 + l4 + l5 + l6 + l7 === num) count++;
                                for (l8 = 1; l8 <= 3; l8++) {
                                    if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 === num) count++;
                                    for (l9 = 1; l9 <= 3; l9++) {
                                        if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 === num) count++;
                                        for (l0 = 1; l0 <= 3; l0++) {
                                            if (l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l0 === num) count++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(count);
}
