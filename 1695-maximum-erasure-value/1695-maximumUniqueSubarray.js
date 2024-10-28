function maximumUniqueSubarray(nums) {
  let max = 0;
  let left = 0;
  let sum = 0;
  let numToEle = new Map();

  for (let right = 0; right < nums.length; right++) {
    numToEle.set(nums[right], (numToEle.get(nums[right]) || 0) + 1);
    sum += nums[right];
    while (numToEle.get(nums[right]) > 1) {
      numToEle.set(nums[left], numToEle.get(nums[left]) - 1);
      sum -= nums[left];
      left++;
    }
    max = Math.max(sum, max);
  }
  return max;
}

module.exports = maximumUniqueSubarray;
