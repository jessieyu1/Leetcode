function maxSum(nums, m, k) {
  let sum = 0;
  let map = new Map();
  let tempSum = 0;

  for (let i = 0; i < k; i++) {
    tempSum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  if (map.size >= m) {
    sum = tempSum;
  }
  for (let i = k; i < nums.length; i++) {
    tempSum += nums[i] - nums[i - k];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (map.get(nums[i - k]) === 1) {
      map.delete(nums[i - k]);
    } else {
      map.set(nums[i - k], map.get(nums[i - k]) - 1);
    }

    if (map.size >= m && tempSum > sum) {
        sum = tempSum;
      }
  }

  return sum;
}

module.exports = maxSum;
