const minMeetingRooms = require("./0253-meeting-rooms-II");

// Test Case 1:
let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
let expectedOutput = 2;
let actualOutput = minMeetingRooms(intervals);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test Case 2:
intervals = [
  [7, 10],
  [2, 4],
];
expectedOutput = 1;
actualOutput = minMeetingRooms(intervals);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

// Test Case 3:
intervals = [
  [9, 10],
  [4, 9],
  [4, 17],
];
expectedOutput = 2;
actualOutput = minMeetingRooms(intervals);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);
