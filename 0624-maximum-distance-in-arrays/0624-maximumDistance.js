function maximumDistance(arrays) {
  let maxDistance = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  for (let i = 1; i < arrays.length; i++) {
    const currentMin = arrays[i][0];
    const currentMax = arrays[i][arrays[i].length - 1];
    maxDistance = Math.max(
      maxDistance,
      Math.abs(currentMin - max),
      Math.abs(currentMax - min)
    );
    min = Math.min(min, currentMin);
    max = Math.max(max, currentMax);
  }
  return maxDistance;
}
module.exports = maximumDistance;
