function decrypt(code, k) {
  let n = code.length;
  if (k === 0) return code.map((e) => (e = 0));
  let result = [];
  let sum = 0;
  if (k > 0) {
    for (let i = 1; i <= k; i++) {
      sum += code[i];
    }
    result.push(sum);

    for (let i = 1; i < n; i++) {
      sum += code[(i + k) % n] - code[i];
      result[i] = sum;
    }
  }

  if (k < 0) {
    for (let i = 0; i < Math.abs(k); i++) {
      sum += code[(n - i - 1) % n];
    }
    result[0] = sum;
    for (let i = 1; i < n; i++) {
      sum += code[i - 1] - code[Math.abs(n + i + k - 1) % n];
      result[i] = sum;
    }
  }

  return result;
}

module.exports = decrypt;
