const searchRange = function (nums, target) {
  let min = findBound(nums, target, true);
  if (min === -1) return [-1, -1];
  let max = findBound(nums, target, false);
  return [min, max];
};

function findBound(nums, target, isMin) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      if (isMin) {
        if (mid === left || nums[mid - 1] < target) return mid;
        else {
          right = mid - 1;
        }
      } else {
        if (mid === right || nums[mid + 1] > target) return mid;
        else {
          left = mid + 1;
        }
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
}

module.exports = searchRange;
