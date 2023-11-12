const intersection = function (nums1, nums2) {
  let nums1Set = new Set(nums1);
  let result = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i]) ) {
      result.push(nums2[i]);
      nums1Set.delete(nums2[i])
    }
  }
  return result;
};

module.exports = intersection;
