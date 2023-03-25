function moveZeros(nums) {
  if (nums.length <= 1) return nums;

  let numZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numZeros++;
    } else if (numZeros > 0) {
      [nums[i], nums[i - numZeros]] = [nums[i - numZeros], nums[i]];
    }
  }

  return nums;
}
module.exports = moveZeros;
