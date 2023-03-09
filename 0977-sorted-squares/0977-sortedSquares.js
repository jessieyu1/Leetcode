/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  var newNum = [];
  for (var i = nums.length - 1; i >= 0; i--) {
    var square = 0;
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = Math.abs(nums[right]);
      right--;
    } else {
      square = Math.abs(nums[left]);
      left++;
    }
    newNum[i] = square * square;
  }
  return newNum;
};

module.exports = sortedSquares;
