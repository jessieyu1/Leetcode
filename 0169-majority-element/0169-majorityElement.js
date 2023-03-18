function majorityElement(nums) {
  let map = new Map();

  let maj = nums.length / 2;

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (!map.has(nums[i])) {
      map.set(nums[i], count);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value > maj) {
      result = key;
    }
  }
  return result;
}
module.exports = majorityElement;
