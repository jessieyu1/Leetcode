let maximumTime = require("./1736-maximum-time.js");

let time = "2?:?0";
let expectedOutput = "23:50";
let actualOutput = maximumTime(time);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

time = "0?:3?";
expectedOutput = "09:39";
actualOutput = maximumTime(time);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

time = "1?:22";
expectedOutput = "19:22";
actualOutput = maximumTime(time);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
