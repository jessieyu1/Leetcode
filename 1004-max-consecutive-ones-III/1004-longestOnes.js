function longestOnes(nums, k) {
  let max = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 1) k--;
    if (k < 0) {
      if (nums[left] !== 1) k++;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}

module.exports = longestOnes;
