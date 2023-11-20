const evalRPN = require('./0150-evaluate-reverse-polish-notation')

let tokens = ["2", "1", "+", "3", "*"]
let output = 9

console.assert(
    JSON.stringify(evalRPN(tokens)) === JSON.stringify(output),
    `Should be ${output}, but is ${evalRPN(tokens)}`

)

tokens =  ["4","13","5","/","+"]
output = 6

console.assert(
    JSON.stringify(evalRPN(tokens)) === JSON.stringify(output),
    `Should be ${output}, but is ${evalRPN(tokens)}`

)

tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

output = 22;

console.assert(
    JSON.stringify(evalRPN(tokens)) === JSON.stringify(output),
    `Should be ${output}, but is ${evalRPN(tokens)}`

)
