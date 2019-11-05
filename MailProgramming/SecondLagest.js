function secondLagest(nums, k) {
    const list = [];
    const visited = {};
    let max = nums[0];
    let num;

    for (let ix = 1; ix < nums.length; ix++) {
        num = nums[ix];
        if (!visited[num]) {
            if (max < num) {
                list.splice(0, 0, max);
                max = num;
            } else {
                list.push(num);
            }
            visited[num] = true;
        }
    }

    list.splice(0, 0, max);

    return list[0] > list[1] ? list[1] : 'does not exist';
    // return nums.sort((a, b) => a - b)[nums.length - k];
}

console.log(secondLagest([10, 5, 4, 3, -1]));
console.log(secondLagest([3, 3, 3]));
