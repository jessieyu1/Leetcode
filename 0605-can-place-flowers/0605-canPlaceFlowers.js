function canPlaceFlowers(flowerbed, n) {
  let bed = [0, ...flowerbed, 0];
  let count = 0;
  for (let i = 1; i < bed.length - 1; i++) {
    if (bed[i - 1] === 0 && bed[i] === 0 && bed[i + 1] === 0) {
      bed[i] = 1;
      count++;
    }
    if (count >= n) return true;
  }
  return count >= n;
}

module.exports = canPlaceFlowers;
