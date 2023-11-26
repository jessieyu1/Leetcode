const searchRange = require('./0034-find-first-and-last-position');

let nums = [5, 7, 7, 8, 8, 10];

let target = 8;

let result = [3, 4];

console.assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(result),
 `test case 1 searchRange is wrong, expected result is [3, 4], but got  ${JSON.stringify(searchRange(nums, target))} instead`);

nums = [5, 7, 7, 8, 8, 10];

target = 6;

result = [-1, -1];

console.assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(result),
    `test case 2 searchRange is wrong, expected result is [-1, -1], but got  ${JSON.stringify(searchRange(nums, target))} instead`);

nums = [];

target = 0;

result = [-1, -1];

console.assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(result),
    `test case 3 searchRange is wrong, expected result is [-1, -1], but got  ${JSON.stringify(searchRange(nums, target))} instead`);

nums = [1];

target = 1;

result = [0, 0];

console.assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(result),

    `test case 4 searchRange is wrong, expected result is [0, 0], but got  ${JSON.stringify(searchRange(nums, target))} instead`);

nums = [1, 2, 2, 2, 2, 3];

target = 2;

result = [1, 4];

console.assert(JSON.stringify(searchRange(nums, target)) === JSON.stringify(result),
    
        `test case 5 searchRange is wrong, expected result is [1, 4], but got  ${JSON.stringify(searchRange(nums, target))} instead`);  

        
