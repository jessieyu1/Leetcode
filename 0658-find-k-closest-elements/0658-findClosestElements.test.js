const findClosestElements = require("./0658-findClosestElements");

let arr = [1, 2, 3, 4, 5];
let k = 4;
let x = 3;
let expectedOutput = [1, 2, 3, 4];
let actualOutput = findClosestElements(arr, k, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

arr = [1,1,2,3,4,5];
k = 4;
x = -1;
expectedOutput = [1,1,2,3];
actualOutput = findClosestElements(arr, k, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

arr = [1,1,2,3,4,5];
k = 4;
x = 5;
expectedOutput = [2,3,4,5];
actualOutput = findClosestElements(arr, k, x);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);