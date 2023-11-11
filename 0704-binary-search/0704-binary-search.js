search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
};

module.exports = search;
