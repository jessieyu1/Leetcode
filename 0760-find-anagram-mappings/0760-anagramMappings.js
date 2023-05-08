function anagramMappings(nums1, nums2) {
  return nums1.map((element) => nums2.indexOf(element));
}

module.exports = anagramMappings;
