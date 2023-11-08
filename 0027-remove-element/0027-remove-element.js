const removeElement = function (nums, val) {
    let fastIndex = 0;
    let slowIndex = 0;
    while (fastIndex < nums.length) {
        if (nums[fastIndex !== val]) {
            nums[slowIndex] = nums[fastIndex];
            slowIndex++
        } else {
            fastIndex++
        }
    }
    return slowIndex;
}

module.exports = removeElement;