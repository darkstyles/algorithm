productExceptSelf = function(nums) {
    const output = [];
    const asc = [];
    const desc = [];

    asc[0] = 1;
    for (let ix = 1; ix < nums.length; ix++) {
        asc[ix] = (nums[ix - 1]) * (asc[ix - 1]);
    }

    desc[nums.length - 1] = 1;
    for (let ix = nums.length - 2; ix >= 0; ix--) {
        desc[ix] = (nums[ix + 1]) * (desc[ix + 1]);
    }

    for (let ix = 0; ix < nums.length; ix++) {
        output[ix] = asc[ix] * desc[ix];
    }

    return output;

};