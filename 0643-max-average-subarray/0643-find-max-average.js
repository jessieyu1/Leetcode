function findMaxAverage(nums, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let temp = maxSum;
  for (let j = k; j < nums.length; j++) {
    temp += nums[j] - nums[j - k];
    maxSum = Math.max(temp, maxSum);
  }
  return maxSum / k;
}

module.exports = findMaxAverage;
