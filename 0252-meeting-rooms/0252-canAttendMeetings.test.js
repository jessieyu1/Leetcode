const canAttendMeetings = require("./0252-canAttendMeetings");

// Test Case 1:
let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
let expectedOutput = false;
let actualOutput = canAttendMeetings(intervals);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test Case 2:
intervals = [
  [7, 10],
  [2, 4],
];
expectedOutput = true;
actualOutput = canAttendMeetings(intervals);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);
