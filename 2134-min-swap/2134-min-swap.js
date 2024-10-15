function minSwap(nums) {
  let countOfOnes = nums.reduce((acc, cur) => acc + cur);
  let minimumSwaps = Infinity;
  let oneValue = 0;
  
  for (let i = 0; i < countOfOnes; i++) {
    if (nums[i] === 1) {
      oneValue += nums[i];
    }
  }

  for (let i = countOfOnes; i < nums.length + countOfOnes; i++) {
    if (nums[i % nums.length] === 1) {
      oneValue += 1;
    }
    if (nums[i - countOfOnes] === 1) {
      oneValue -= 1;
    }

    minimumSwaps = Math.min(minimumSwaps, countOfOnes - oneValue);
  }

  return minimumSwaps;
}

module.exports = minSwap;
