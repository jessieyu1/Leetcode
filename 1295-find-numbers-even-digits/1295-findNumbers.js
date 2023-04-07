function findNumbers(nums) {
  let numEven = 0;
  nums.forEach((num) => {
    if (Math.floor(Math.log10(num)) % 2 !== 0) numEven++;
  });
  return numEven;
}
module.exports = findNumbers;
