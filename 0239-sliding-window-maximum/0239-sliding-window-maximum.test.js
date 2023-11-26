const maxSlidingWindow = require('./0239-sliding-window-maximum');

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;

let result = maxSlidingWindow(nums, k);

console.assert(result.length === 6, `Expected test 1 result.length to be 6, got ${result.length}`);

nums = [1];
k = 1;

result = maxSlidingWindow(nums, k);

console.assert(result.length === 1, `Expected test 2 result.length to be 1, got ${result.length}`);