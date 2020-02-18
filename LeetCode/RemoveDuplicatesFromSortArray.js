/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let value = nums[0];
    let index = 1;
    let num;

    while(index < nums.length) {
        num = nums[index];
        if (value === num) {
            nums.splice(index, 1);
        } else {
            value = num;
            index++;
        }
    }

    return nums.length;
};