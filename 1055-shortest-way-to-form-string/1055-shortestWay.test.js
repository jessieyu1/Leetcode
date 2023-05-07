const shortestWay = require("./1055-shortestWay");

// test case 1
let source = "abc";
let target = "abcbc";
let expectedOutput = 2;
let actualOutput = shortestWay(source, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// test case 2
source = "abc";
target = "acdbc";
expectedOutput = -1;
actualOutput = shortestWay(source, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// test case 3
source = "xyz";
target = "xzyxz";
expectedOutput = 3;
actualOutput = shortestWay(source, target);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
