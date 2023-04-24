function findMissingRangers(nums, lower, upper) {
  if (nums.length === 0) return [[lower, upper]];
  let result = [];
  if (lower !== nums[0]) {
    result.push([lower, nums[0] - 1]);
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      result.push([nums[i - 1] + 1, nums[i] - 1]);
    }
  }
  if (upper !== nums[nums.length - 1]) {
    result.push([nums[nums.length - 1] + 1, upper]);
  }
  return result;
}

module.exports = findMissingRangers;
