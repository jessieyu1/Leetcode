function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > nums[1]) return 0;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    if (nums[mid] < nums[mid - 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

module.exports = findPeakElement;
