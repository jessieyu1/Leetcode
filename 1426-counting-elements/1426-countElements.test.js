const countElements = require("./1426-countElements");

//test case 1
let arr = [1, 2, 3];
let expectedOutput = 2;
let actualOutput = countElements(arr);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
arr = [1, 1, 3, 3, 5, 5, 7, 7];
expectedOutput = 0;
actualOutput = countElements(arr);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
arr = [1, 1, 2, 2];
expectedOutput = 2;
actualOutput = countElements(arr);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
