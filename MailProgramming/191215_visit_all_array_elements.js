const visitToElement = (array) => {
    let index;
    let count = 1;
    const visited = [];

    index = array[0];

    for (let ix = 1; ix < array.length; ix++) {
        if (index === 0) {
            break;
        }

        if (!visited[index]) {
            visited[index] = true;
            index = array[index];
            count++;
        }
    }

    return count === array.length;
};


console.log(visitToElement([1, 2, 4, 0, 3]));
console.log(visitToElement([1, 4, 5, 0, 3, 2]));
console.log(visitToElement([1, 2, 2, 0]));