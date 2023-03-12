function mySqrt(x) {
  if (x === 0 || x === 1) {
    return x;
  } else if (x === 2) {
    return 1;
  } else {
    for (let s = 2; s < x; s++) {
      let nearN = s * s;
      if (nearN === x) {
        return s;
      } else if (nearN > x) {
        return s - 1;
      }
    }
  }
}

module.exports = mySqrt;
