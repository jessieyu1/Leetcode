function distanceTraveled(mainTank, additionalTank) {
  let distance = 0;
  while (mainTank) {
    distance += 10;
    mainTank--;
    if (distance % 50 === 0 && additionalTank) {
      mainTank++;
      additionalTank--;
    }
  }
  return distance;
}

module.exports = distanceTraveled;
