function wiggleSort(nums) {
  nums.sort((a, b) => a - b); // sort the array in ascending order

  // swap adjacent elements to satisfy the condition
  for (let i = 1; i < nums.length - 1; i += 2) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
  return nums;
}

module.exports = wiggleSort;
