function increasingTriplet(nums) {
  let firstNum = Infinity;
  let secondNum = Infinity;

  for (num of nums) {
    if (num <= firstNum) {
      firstNum = num;
    } else if (num <= secondNum) {
      secondNum = num;
    } else {
      return true;
    }
  }
  return false;
}

module.exports = increasingTriplet;
