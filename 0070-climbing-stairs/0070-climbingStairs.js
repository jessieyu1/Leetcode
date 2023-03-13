function climbStairs(n) {
  climbStairs[1] = 1;
  climbStairs[2] = 2;

  for (let i = 3; i <= n; i++) {
    climbStairs[i] = climbStairs[i - 1] + climbStairs[i - 2];
  }
  return climbStairs[n];
}
module.exports = climbStairs;
