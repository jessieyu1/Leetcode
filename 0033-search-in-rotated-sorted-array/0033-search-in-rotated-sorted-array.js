const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[start] && target > nums[end]) return -1;

  const pivot = findPivot(nums);
  console.log(pivot);
  if (pivot === 0) return binarySearch(nums, target);

  const numsStart = nums.slice(0, pivot);
  console.log(numsStart);
  let result = binarySearch(numsStart, target);
  console.log(result);
  if (result === -1) {
    let numsEnd = nums.slice(pivot);
    console.log(end);
    result = binarySearch(numsEnd, target);
    if (result !== -1) result += pivot;
  }
  return result;
};

// binary search to find target

const binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// binary search to find  pivot index

const findPivot = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  if (nums[start] < nums[end]) return 0;

  while (start <= end) {
    let pivot = Math.floor(start + (end - start) / 2);
    if (pivot === 0) return pivot + 1;

    if (nums[pivot] < nums[pivot - 1]) return pivot;
    if (nums[pivot] < nums[end]) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
  return 0;
};

console.log(findPivot([8, 2]));

module.exports = search;
