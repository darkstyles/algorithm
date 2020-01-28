/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    let sum;
    let jx;
    let kx;

    nums.sort((a, b) => a - b);

    for (let ix = 0; ix < nums.length - 2; ix++) {
        if (ix > 0 && nums[ix] === nums[ix - 1]) {
            continue;
        }

        if (nums[ix] > 0) {
            break;
        }

        jx = ix + 1;
        kx = nums.length - 1;
        while(jx < kx) {
            sum = nums[ix] + nums[jx] + nums[kx];
            if (sum > 0) {
                kx--;
            } else if (sum < 0) {
                jx++;
            } else {
                result.push([nums[ix], nums[jx], nums[kx]]);
                while(nums[kx] === nums[kx - 1]) kx--;
                while(nums[jx] === nums[jx + 1]) jx++;
                kx--;
                jx++;
            }
        }
    }

    return result;
};