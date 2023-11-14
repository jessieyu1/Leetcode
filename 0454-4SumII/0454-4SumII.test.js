const fourSumCount = require('./0454-4SumII');

let nums1 = [1, 2];
let nums2 = [-2, -1];
let nums3 = [-1, 2];
let nums4 = [0, 2];
let expectedOutput = 2;

let output = fourSumCount(nums1, nums2, nums3, nums4);

console.assert(output === expectedOutput, `test 1 Wrong Answer`);

nums1 = [0];
nums2 = [0];
nums3 = [0];
nums4 = [0];
expectedOutput = 1;

output = fourSumCount(nums1, nums2, nums3, nums4);

console.assert(output === expectedOutput, `test 2 Wrong Answer`);
