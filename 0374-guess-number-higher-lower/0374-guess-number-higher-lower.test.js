const guessNumber = require("./0374-guess-number-higher-lower");

let n = 10;
let expectedOutput = 6;
let actualOutput = guessNumber(n);

console.assert(
  actualOutput === expectedOutput,
  `Expected ${expectedOutput} but got ${actualOutput}`
);

n = 1;
expectedOutput = 1;
actualOutput = guessNumber(n);

console.assert(
  actualOutput === expectedOutput,
  `Expected ${expectedOutput} but got ${actualOutput}`
);

n = 2;
expectedOutput = 1;
actualOutput = guessNumber(n);

console.assert(
  actualOutput === expectedOutput,
  `Expected ${expectedOutput} but got ${actualOutput}`
);
