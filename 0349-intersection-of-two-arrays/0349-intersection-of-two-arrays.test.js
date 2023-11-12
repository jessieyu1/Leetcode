const intersection = require('./0349-intersection-of-two-arrays');

let nums1 = [1,2,2,1];
let nums2 = [2,2];
let expectedOutput = [2];
let output = intersection(nums1, nums2);

console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'test cast 1, wrong answer');

nums1 = [4,9,5];
nums2 = [9,4,9,8,4];
expectedOutput = [9,4];
// expectedOutput = [4,9];
output = intersection(nums1, nums2);    

console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'test cast 2, wrong answer');

