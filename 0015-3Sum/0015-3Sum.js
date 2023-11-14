const threeSum = function (nums) {
  let results = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[0] > 0) {
      return results;
    }
    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        let result = [nums[i], nums[left], nums[right]];
        results.push(result);
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        right--;
      }
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      }
    }
  }
  return results;
};

module.exports = threeSum;
