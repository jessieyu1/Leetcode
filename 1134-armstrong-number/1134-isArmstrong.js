function isArmstrong(n) {
  return (
    `${n}`
      .split("")
      .reduce((a, c, _, arr) => (a += Math.pow(c, arr.length)), 0) === n
  );
}

module.exports = isArmstrong;
