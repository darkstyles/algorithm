/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [];
    let start = 0;
    let end = nums.length - 1;
    let mid;

    if(!nums.length) {
        return [-1, -1];
    }

    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] < target) {
            start = mid + 1;
        } else  {
            end = mid;
        }
    }

    if (nums[start] !== target) {
        result.push(-1);
    } else {
        result.push(start);
    }

    end = nums.length - 1;
    while(start < end) {
        mid = Math.floor((start + end) / 2) + 1;
        if (nums[mid] > target) {
            end = mid - 1;
        } else  {
            start = mid;
        }
    }

    if (nums[start] !== target) {
        result.push(-1);
    } else {
        result.push(start);
    }

    return result;
};