const fourSum = require('./0018-4Sum');

let nums = [-1, 0, 1, 2, -1, -4];
let target = -1;

let expectedOutput = [[-4, 0, 1, 2], [-1, -1, 0, 1]];

let actualOutput = fourSum(nums, target);

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected test 1 ${JSON.stringify(expectedOutput)}, but got ${JSON.stringify(actualOutput)} instead`
  );
nums = [];
target = 0;
expectedOutput = [];

actualOutput = fourSum(nums, target);

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected test 2 ${JSON.stringify(expectedOutput)}, but got ${JSON.stringify(actualOutput)} instead`
  );
nums = [0,0,0,0];

target = 0;
expectedOutput = [[0,0,0,0]];

actualOutput = fourSum(nums, target);

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected test 3 ${JSON.stringify(expectedOutput)}, but got ${JSON.stringify(actualOutput)} instead`
  );
nums = [1,0,-1,0,-2,2];
target = 0;

expectedOutput = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];

actualOutput = fourSum(nums, target);

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected test 4 ${JSON.stringify(expectedOutput)}, but got ${JSON.stringify(actualOutput)} instead`
  );