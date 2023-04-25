function intersect(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  const map = new Map();
  for (const n of nums1) {
    const val = map.get(n) || 0;
    map.set(n, val + 1);
  }
  const result = [];
  for (const n of nums2) {
    const val = map.get(n) || 0;
    if (val > 0) {
      result.push(n);
      map.set(n, val - 1);
    }
  }
  return result;
}

module.exports = intersect;
