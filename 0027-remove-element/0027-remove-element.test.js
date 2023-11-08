const removeElement = require('./0027-remove-element');

let nums = [3,2,2,3];
let val = 3;
let result = 2;

console.assert(JSON.stringify(removeElement(nums, val)) === JSON.stringify(result), 'removeElement - case 1');

nums = [0,1,2,2,3,0,4,2];
val = 2;
result = 5;

console.assert(JSON.stringify(removeElement(nums, val)) === JSON.stringify(result), 'removeElement - case 2');