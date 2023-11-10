const removeElements = require('./0203-remove-linked-list-elements');

// Test case 1
let head = {val: 1, next: {val: 2, next: {val: 6, next: {val: 3, next: {val: 4, next: {val: 5, next: {val: 6, next: null}}}}}}};
let val = 6;
let expectedOutput = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
console.assert(JSON.stringify(removeElements(head, val)) === JSON.stringify(expectedOutput), "Test case 1 failed");

// Test case 2
head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
val = 1;
expectedOutput = {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}};
console.assert(JSON.stringify(removeElements(head, val)) === JSON.stringify(expectedOutput), "Test case 2 failed");

// Test case 3
head = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}};
val = 5;
expectedOutput = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: null}}}};
console.assert(JSON.stringify(removeElements(head, val)) === JSON.stringify(expectedOutput), "Test case 3 failed");

// Test case 4
head = null;
val = 1;
expectedOutput = null;
console.assert(JSON.stringify(removeElements(head, val)) === JSON.stringify(expectedOutput), "Test case 4 failed");

// Test case 5
head = {val: 1, next: null};
val = 1;
expectedOutput = null;
console.assert(JSON.stringify(removeElements(head, val)) === JSON.stringify(expectedOutput), "Test case 5 failed");
