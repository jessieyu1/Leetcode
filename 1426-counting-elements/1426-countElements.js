function countElement(arr) {
  let result = 0;
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 1)) {
      result++;
    }
  }
  return result;
}

module.exports = countElement;
