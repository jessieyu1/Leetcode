function maximumSubarraySum(nums, k) {
  let maxSum = 0;
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < k; i++) {
    sum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  if (map.size === k) {
    maxSum = sum;
  }

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (map.get(nums[i - k]) === 1) {
      map.delete(nums[i - k]);
    } else {
      map.set(nums[i - k], map.get(nums[i - k]) - 1);
    }

    if (map.size === k && sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

module.exports = maximumSubarraySum;
