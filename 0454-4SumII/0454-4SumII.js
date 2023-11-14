const fourSumCount = (nums1, nums2, nums3, nums4) => {
  let map1n2 = new Map();
  let count = 0;
  for (n1 of nums1) {
    for (n2 of nums2) {
      let sum1 = n1 + n2;
      map1n2.set(sum1, (map1n2.get(sum1) || 0) + 1);
    }
  }

  for (n3 of nums3) {
    for (n4 of nums4) {
      let sum2 = n3 + n4;
      count += map1n2.get(0 - sum2) || 0;
    }
  }
  return count;
};

module.exports = fourSumCount;
