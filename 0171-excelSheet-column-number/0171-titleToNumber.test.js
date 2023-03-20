const titleToNumber = require("./0171-titleToNumber");

//test case 1
let columnTitle = "A";
let expectedOutput = 1;
let actualOutput = titleToNumber(columnTitle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
columnTitle = "AB";
expectedOutput = 28;
actualOutput = titleToNumber(columnTitle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
columnTitle = "ZY";
expectedOutput = 701;
actualOutput = titleToNumber(columnTitle);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
