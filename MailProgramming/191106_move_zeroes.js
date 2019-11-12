 function moveZeroes (nums) {
    let index = 0;
    let zeroIndex = -1;

    while (index < nums.length) {
        if (nums[index] === 0) {
            if (zeroIndex === -1) {
                zeroIndex = index;
            }
        } else {
            if (zeroIndex !== -1){
                nums[zeroIndex++] = nums[index];
                nums[index] = 0;
            }
        }

        index++;
    }
}