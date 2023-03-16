function singleNumber(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  for (const key of set.keys()) {
    return key;
  }
}
module.exports = singleNumber;
