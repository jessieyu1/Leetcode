function runningSum(nums) {
  nums.reduce((acc, curr, i) => {
    nums[i] = acc + curr;
    return nums[i];
  }, 0);
  return nums;
}

module.exports = runningSum;
