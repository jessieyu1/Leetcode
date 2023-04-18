function secondHighest(s) {
  let digits = s.match(/\d/g);
  if (digits === null) return -1;
  digits = [...new Set(digits)].sort((a, b) => b - a);
  return digits.length > 1 ? Number(digits[1]) : -1;
}

module.exports = secondHighest;
