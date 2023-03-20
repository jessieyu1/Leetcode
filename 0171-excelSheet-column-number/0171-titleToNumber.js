//hashmap
const letterMap = Object.fromEntries(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map((letter, index) => [letter, index + 1])
);

function titleToNumber(columnTitle) {
  const segs = columnTitle.split("");
  return segs.reduce((acc, letter) => acc * 26 + letterMap[letter], 0);
}

module.exports = titleToNumber;
