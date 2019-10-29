function mergeInterval(list) {
    const result = [];
    let interval;
    let lastIndex;

    if (!list.length) {
        return result;
    }

    list.sort((a, b) => a[0] - b[0]);

    result.push(list[0]);

    for (let ix = 1; ix < list.length; ix++) {
        interval = list[ix];
        lastIndex = result.length - 1;
        if (result[lastIndex][1] < interval[0]) {
            result.push(interval);
        } else {
            result[lastIndex][1] = Math.max(result[lastIndex][1], interval[1]);
        }
    }

    return result;
}

console.log(mergeInterval([[2,4], [1,5], [7,9]]));
console.log(mergeInterval([[3,6], [1,3], [2,4]]));