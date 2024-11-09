function countSubarrays(nums, k) {
  let result = 0;
  let max = Math.max(...nums);
  let left = 0;
  let countOfMax = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) countOfMax++;

    while (countOfMax >= k) {
      result += nums.length - right;
      if (nums[left] === max) countOfMax--;
      left++;
    }
  }
  return result;
}

module.exports = countSubarrays;
