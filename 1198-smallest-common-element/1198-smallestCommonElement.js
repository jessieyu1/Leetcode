function areSentenceSimilar(mat) {
  const map = new Map();
  for (let i = 0; i < mat[0].length; i++) {
    map.set(mat[0][i], 1);
  }

  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (map.has(mat[i][j])) {
        map.set(mat[i][j], map.get(mat[i][j]) + 1);
      }
    }
  }
  for (let [key, value] of map) {
    if (value === mat.length) {
      return key;
    }
  }
  return -1;
}

module.exports = areSentenceSimilar;
