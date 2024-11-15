function numberOfSubarrays(nums, k) {
  function niceSubarray(nums, k) {
    let ans = 0;
    let left = 0;
    let count = 0;
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] % 2 === 1) count++;

      while (count > k && left < right) {
        if (nums[left] % 2 === 1) {
          count--;
        }
        left++;
      }
      if (count <= k) {
        ans += right - left + 1;
      }
    }

    return ans;
  }
  return niceSubarray(nums, k) - niceSubarray(nums, k - 1);
}

module.exports = numberOfSubarrays;
