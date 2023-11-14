const threeSum = require('./0015-3Sum');

let nums = [-1, 0, 1, 2, -1, -4];
let expectedOutput = [[-1, -1, 2],[-1, 0, 1]];

let output = threeSum(nums);


console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), `test 1 Wrong Answer`);

nums = [];
expectedOutput = [];

output = threeSum(nums);

console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'test 2 Wrong Answer');

nums = [0,0,0]
expectedOutput = [[0,0,0]];

output = threeSum(nums);

console.assert(JSON.stringify(output) === JSON.stringify(expectedOutput), 'test 3 Wrong Answer');