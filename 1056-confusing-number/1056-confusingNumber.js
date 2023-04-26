function confusingNumber(n) {
  let map = new Map();
  map.set("0", "0");
  map.set("1", "1");
  map.set("6", "9");
  map.set("8", "8");
  map.set("9", "6");

  let rotateNumber = [];

  for (let char of String(n)) {
    const value = map.get(char);
    if (!value) return false;
    rotateNumber.push(value);
  }

  let result = Number(rotateNumber.reverse().join(""));

  return result !== n;
}

module.exports = confusingNumber;
