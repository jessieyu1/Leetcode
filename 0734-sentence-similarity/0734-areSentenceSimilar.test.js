const areSentenceSimilar = require("./0734-areSentenceSimilar");

//Test Case 1:
let sentence1 = ["great", "acting", "skills"];
let sentence2 = ["fine", "drama", "talent"];
let similarPairs = [
  ["great", "fine"],
  ["drama", "acting"],
  ["skills", "talent"],
];
let expectedOutput = true;
let actualOutput = areSentenceSimilar(sentence1, sentence2, similarPairs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 1 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 2:
sentence1 = ["great"];
sentence2 = ["great"];
similarPairs = [];
expectedOutput = true;
actualOutput = areSentenceSimilar(sentence1, sentence2, similarPairs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 2 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 3:
sentence1 = ["great"];
sentence2 = ["doubleplus", "good"];
similarPairs = [["great", "doubleplus"]];
expectedOutput = false;
actualOutput = areSentenceSimilar(sentence1, sentence2, similarPairs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 3 to be ${expectedOutput}, but got ${actualOutput} instead`
);

//Test Case 4:
sentence1 = ["great", "acting", "skills"];
sentence2 = ["fine", "painting", "talent"];
similarPairs = [
  ["great", "fine"],
  ["drama", "acting"],
  ["skills", "talent"],
];
expectedOutput = false;
actualOutput = areSentenceSimilar(sentence1, sentence2, similarPairs);
console.assert(
  JSON.stringify(actualOutput) === JSON.stringify(expectedOutput),
  `Expected test case 4 to be ${expectedOutput}, but got ${actualOutput} instead`
);
