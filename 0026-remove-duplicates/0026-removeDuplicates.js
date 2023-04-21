function removeDuplicates(nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
}

module.exports = removeDuplicates;
