function findMaxConsecutiveOnes(nums) {
  if (!nums.includes(0)) return nums.length;

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let left = i;
      let right = i;
      while (left > 0 && nums[left - 1] !== 0) {
        left--;
      }
      while (right < nums.length - 1 && nums[right + 1] !== 0) {
        right++;
      }
      result = Math.max(result, right - left + 1);
    }
  }
  return result;
}

module.exports = findMaxConsecutiveOnes;
