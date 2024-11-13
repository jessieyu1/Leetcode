function numSubarraysWithSum(nums, goal) {
  function countSubarraysWithSumAtMost(nums, k) {
    let ans = 0;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];

      while (left < right && sum > k) {
        sum -= nums[left];
        left++;
      }

      if (sum <= k) {
        ans += right - left + 1;
      }
    }
    return ans;
  }

  return (
    countSubarraysWithSumAtMost(nums, goal) -
    countSubarraysWithSumAtMost(nums, goal - 1)
  );
}

module.exports = numSubarraysWithSum;
