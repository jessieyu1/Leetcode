function largestUniqueNumber(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let result = -1;

  for (let [key, value] of map) {
    if (value === 1 && key > result) {
      result = key;
    }
  }
  return result;
}

module.exports = largestUniqueNumber;
