const isValid = require("./0020-validParentheses");

//test case 1
let s = "()";
let expectedOutput = true;
let actualOutput = isValid(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test 1 ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 2
s = "()[]{}";
expectedOutput = true;
actualOutput = isValid(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected  test 2 ${expectedOutput}, but got ${actualOutput} instead`
);
//test case 3
s = "(]";
expectedOutput = false;
actualOutput = isValid(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected  test 3${expectedOutput}, but got ${actualOutput} instead`
);
//test case 4
s = "()]";
expectedOutput = false;
actualOutput = isValid(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected  test 4${expectedOutput}, but got ${actualOutput} instead`
);
//test case 5
s = "(({}))";
expectedOutput = true;
actualOutput = isValid(s);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected  test 5 ${expectedOutput}, but got ${actualOutput} instead`
);
