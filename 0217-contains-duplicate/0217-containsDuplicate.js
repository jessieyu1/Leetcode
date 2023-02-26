/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var set = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};

module.exports = containsDuplicate;
