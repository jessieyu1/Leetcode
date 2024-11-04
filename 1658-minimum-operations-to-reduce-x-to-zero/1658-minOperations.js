function minOperations(nums, x) {
  const target = nums.reduce((a, b) => a + b) - x;
  let maxLength = -1;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > target ) {
      sum -= nums[left];
      left++;
    }
    if (sum === target) {
        maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  return maxLength === -1 ? -1 : nums.length - maxLength;
}

module.exports = minOperations;
