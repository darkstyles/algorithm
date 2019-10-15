const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('## ');
rl.prompt();

const mod = (a, b) => {
    return a % b;
}

rl.on('line', (input) => {
    const data = input.split(' ');
    const a = +data[0];
    const b = +data[1];
    const c = +data[2];

    const case1 = mod(a + b, c);
    const case2 = mod(mod(a, c) + mod(b, c), c);
    const case3 = mod(a * b, c);
    const case4 = mod(mod(a, c) * mod(b, c), c);

    console.log(case1);
    console.log(case2);
    console.log(case3);
    console.log(case4);

    rl.close();
});

rl.on('close', () => {
    process.exit();
});