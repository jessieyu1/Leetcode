function longestEqualSubarray(nums, k) {
  const numToCount = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    numToCount.set(nums[right], (numToCount.get(nums[right]) || 0) + 1);
    maxLength = Math.max(maxLength, numToCount.get(nums[right]));
    if (right - left + 1 - maxLength > k) {
      numToCount.set(nums[left], numToCount.get(nums[left]) - 1);
      left++;
    }
  }
  return maxLength;
}

module.exports = longestEqualSubarray;
