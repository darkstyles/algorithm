function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    let word;
    let reverseWord;

    for (let ix = 0; ix < words.length; ix++) {
        // word = words[ix];
        // reverseWord = [];
        // for (let jx = word.length - 1; jx >= 0; jx--) {
        //     reverseWord.push(word.charAt(jx));
        // }

        // result.push(reverseWord.join(''));
        result.push(words[ix].split('').reverse().join(''));
    }

    return result.join(' ');
}

console.log(reverseWords('abc 123 apple'));