const findBadVersion = require('./0278-first-bad-version.js')

let n = 5
let badVersion = 4
let expectedOutput = 4
let actualOutput  = findBadVersion(n, badVersion)

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

n = 1  
badVersion = 1
expectedOutput = 1
actualOutput  = findBadVersion(n, badVersion)

console.assert(
    JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
    `Expected ${expectedOutput}, but got ${actualOutput} instead`
);

