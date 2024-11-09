function numSubarrayProductLessThanK(nums, k) {
  let ans = 0;
  let left = 0;
  let product = 1;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }
    ans += right - left + 1;
  }
  return ans;
}

module.exports = numSubarrayProductLessThanK;
