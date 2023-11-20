const evalRPN = function (tokens) {
  const stack = [];

  for (let ele of tokens) {
    if (isNaN(Number(ele))) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      switch (ele) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(Math.trunc(num1 / num2) || 0);
          break;
      }
    } else {
      stack.push(Number(ele));
    }
  }

  return stack[0];
};

module.exports = evalRPN;
