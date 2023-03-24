// Gauss' Formula
function missingNumber(nums) {
  const sum = ((nums.length + 1) * nums.length) / 2;

  const sumWithInitial = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum - sumWithInitial;
}

module.exports = missingNumber;

/*
Complexity Analysis

Time complexity : O(n)

Although Gauss' formula can be computed in O(1) time, summing nums costs us O(n) time, 
so the algorithm is overall linear. 
Because we have no information about which number is missing, 
an adversary could always design an input for which any algorithm that 
examines fewer than nnn numbers fails. Therefore, this solution is asymptotically optimal.

Space complexity : O(1)

This approach only pushes a few integers around, so it has constant memory usage.
*/
