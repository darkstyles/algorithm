function sumToTarget(nums, target) {
    const list = {};
    let result;
    let remainNum;

    for (let ix = 0; ix < nums.length; ix++) {
        remainNum = target - nums[ix];
        if (list[remainNum] !== undefined) {
            result = [list[remainNum], ix];
            break;
        } else {
            list[nums[ix]] = ix;
        }
    }

    return result;

}

console.log(sumToTarget([2, 5, 6, 1, 10], 8));