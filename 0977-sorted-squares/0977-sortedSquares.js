function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let newNum = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let square = 0;
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
