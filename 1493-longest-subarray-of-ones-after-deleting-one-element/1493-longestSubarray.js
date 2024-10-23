function longestSubarray(nums) {
  let result = 0;
  let left = 0;
  let eleToIndex = new Map();

  for (let right = 0; right < nums.length; right++) {
    eleToIndex.set(nums[right], (eleToIndex.get(nums[right]) || 0) + 1);
    while (eleToIndex.get(nums[right]) > 1 && nums[right] === 0) {
      eleToIndex.set(nums[left], eleToIndex.get(nums[left]) - 1)
      left++;
    }
    result = Math.max(result, right - left)
  }

  return result;
}

module.exports = longestSubarray;
