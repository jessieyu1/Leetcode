function getAverage(nums, k) {
  let length = nums.length;
  let result = new Array(length).fill(-1);
  let diameter = 2 * k + 1;
  if (nums.length < diameter) return result;
  let sum = 0;
  for (let i = 0; i < diameter; i++) {
    sum += nums[i];
  }
  result[k] = Math.floor(sum / diameter);

  for (let i = diameter; i < length; i++) {
    sum += nums[i] - nums[i - diameter];
    result[i - k] = Math.floor(sum / diameter);
  }

  return result;
}

module.exports = getAverage;
