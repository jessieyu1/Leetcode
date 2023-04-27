function performStringShift(s, shift) {
  let rotateLeft = 0;
  let rotateRight = 0;

  for (let [direction, amount] of shift) {
    if (direction === 0) {
      rotateLeft += amount;
    } else {
      rotateRight += amount;
    }
  }

  const totalRotation = rotateLeft - rotateRight;
  const normalizedRotation = ((totalRotation % s.length) + s.length) % s.length;

  return s.slice(normalizedRotation) + s.slice(0, normalizedRotation);
}

module.exports = performStringShift;
