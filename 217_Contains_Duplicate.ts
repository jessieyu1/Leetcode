/**
 * 217. Contains Duplicate
 * Given an integer array nums,
 * return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums: number[]): boolean {
  let set: Set<number> = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
}
/**
 * Input: nums = [1,2,3,1] ; Output: true
 */
console.log(containsDuplicate([1, 2, 3, 1]));

/**
 * Input: nums = [1,2,3,4];Output: false
 */
console.log(containsDuplicate([1, 2, 3, 4]));