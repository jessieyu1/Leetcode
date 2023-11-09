const generateMatrix = require('./0059-spiral-matrix-ii')

let input = 3
let expectedOutput = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]
let actual = generateMatrix(input)

console.assert(JSON.stringify(actual) === JSON.stringify(expectedOutput), `Expected generateMatrix() to return a matrix of size 3x3 with values 1-9 in a spiral pattern but get ${actual} instead`)

input = 1
expectedOutput = [[1]]
actual = generateMatrix(input)

console.assert(JSON.stringify(actual) === JSON.stringify(expectedOutput), `Expected generateMatrix() to return a matrix of size 1x1 with value 1  but get ${actual} instead`)