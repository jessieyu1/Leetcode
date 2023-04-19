function sum(num1, num2) {
  //binary search
  let left = -200;
  let right = 200;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid === num1 + num2) {
      return mid;
    } else if (mid < num1 + num2) {
      left = mid + 1;
    } else if (mid > num1 + num2) {
      right = mid;
    }
  }
  return left;
}

module.exports = sum;
