const topKFrequent = require('./0347-top-K-frequent-elements')

let nums = [1, 1, 1, 2, 2, 3]
let k = 2
let expectedOutput = [1, 2]
console.assert(
    JSON.stringify(topKFrequent(nums, k)) === JSON.stringify(expectedOutput),
    `Expected test case 1 ${expectedOutput}, got ${topKFrequent(nums, k)}`
    )

// nums = [1]
// k = 1
// expectedOutput = [1]
// console.assert(
//     JSON.stringify(topKFrequent(nums, k)) === JSON.stringify(expectedOutput),
//     `Expected test case 2 ${expectedOutput}, got ${topKFrequent(nums, k)}`
//     )

