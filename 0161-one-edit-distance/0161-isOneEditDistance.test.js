const isOneEditDistance = require("./0161-isOneEditDistance");

//test case 1
let s = "ab";
let t = "acb";
let expectedOutput = true;
let actualOutput = isOneEditDistance(s, t);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be${expectedOutput}, but got ${actualOutput} instead`
);

//test case 2
s = "";
t = "";
expectedOutput = false;
actualOutput = isOneEditDistance(s, t);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be${expectedOutput}, but got ${actualOutput} instead`
);

//test case 3
s = "a";
t = "";
expectedOutput = true;
actualOutput = isOneEditDistance(s, t);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be${expectedOutput}, but got ${actualOutput} instead`
);
