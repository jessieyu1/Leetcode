function sortedSquares(nums) {
  if (!nums.length) return [];
  if (nums.length === 1) return [nums[0] * nums[0]];

  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let position = nums.length - 1;
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }
    position--;
  }

  return result;
}

module.exports = sortedSquares;
