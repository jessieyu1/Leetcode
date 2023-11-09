const minSubArrayLen = function (target, nums) {
  //
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];
    while (sum > target) {
      minLen = Math.min(minLen, right - left);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

module.exports = minSubArrayLen;
