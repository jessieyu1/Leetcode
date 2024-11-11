function countSubarrays(nums, k) {
  let ans = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum * (right - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }

    ans += right - left + 1;
  }
  return ans;
}

module.exports = countSubarrays;
