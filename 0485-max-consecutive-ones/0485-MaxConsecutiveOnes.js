function findMaxConsecutiveOnes(nums) {
  var count = 0;
  var maxOnes = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    maxOnes = Math.max(count, maxOnes);
  }
  return maxOnes;
}
module.exports = findMaxConsecutiveOnes;
