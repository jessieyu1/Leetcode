function numberOfSteps(num) {
  var step = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
      step += 1;
    } else {
      num -= 1;
      step += 1;
    }
  }
  return step;
}

module.exports = numberOfSteps;
