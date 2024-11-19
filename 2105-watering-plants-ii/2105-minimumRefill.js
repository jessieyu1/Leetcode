function minimumRefill(plants, capacityA, capacityB) {
  let refill = 0;
  let left = 0;
  let right = plants.length - 1;
  let waterA = capacityA;
  let waterB = capacityB;

  while (left <= right) {
    if (left === right) {
      if (Math.max(waterA, waterB) < plants[left]) {
        refill++;
      }
      break;
    }

    if (waterA < plants[left]) {
      refill++;
      waterA = capacityA;
    }
    if (waterA >= plants[left]) {
      waterA -= plants[left];
      left++;
    }
    if (waterB < plants[right]) {
      refill++;
      waterB = capacityB;
    }

    if (waterB >= plants[right]) {
      waterB -= plants[right];
      right--;
    }
  }

  return refill;
}

module.exports = minimumRefill;
