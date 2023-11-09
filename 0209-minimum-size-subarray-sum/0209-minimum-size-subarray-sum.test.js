const minSubArrayLen = require('./0209-minimum-size-subarray-sum');

let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
let actualOutput = 2;
let testOutput = minSubArrayLen(target, nums);

console.assert(JSON.stringify(testOutput) === JSON.stringify(actualOutput), 'Expected ' + actualOutput + ' but returned ' + testOutput);

target = 4;
nums = [1, 4, 4];
actualOutput = 1;
testOutput = minSubArrayLen(target, nums);

console.assert(JSON.stringify(testOutput) === JSON.stringify(actualOutput), 'Expected ' + actualOutput + ' but returned ' + testOutput);

target = 11;
nums = [1, 1, 1, 1, 1, 1, 1, 1];
actualOutput = 0;
testOutput = minSubArrayLen(target, nums);

console.assert(JSON.stringify(testOutput) === JSON.stringify(actualOutput), 'Expected ' + actualOutput + ' but returned ' + testOutput);

target = 7
nums = [4, 3, 1,1,1,1]
actualOutput = 2;
testOutput = minSubArrayLen(target, nums)
console.assert(JSON.stringify(testOutput) === JSON.stringify(actualOutput), 'Expected ' + actualOutput + ' but returned ' + testOutput);

