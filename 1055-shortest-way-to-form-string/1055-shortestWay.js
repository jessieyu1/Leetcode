function shortestWay(source, target) {
  // using two pointers
  let sourceChars = new Array(26).fill(false);
  for (let c of source) {
    sourceChars[c.charCodeAt(0) - "a".charCodeAt(0)] = true;
  }

  for (let c of target) {
    if (!sourceChars[c.charCodeAt(0) - "a".charCodeAt(0)]) {
      return -1;
    }
  }

  let m = source.length;

  let sourceIterator = 0;

  let count = 0;

  for (let c of target) {
    if (sourceIterator == 0) {
      count++;
    }

    while (source[sourceIterator] != c) {
      sourceIterator = (sourceIterator + 1) % m;
      if (sourceIterator == 0) {
        count++;
      }
    }
    sourceIterator = (sourceIterator + 1) % m;
  }

  return count;
}

module.exports = shortestWay;
