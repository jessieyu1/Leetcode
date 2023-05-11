function calculateTime(keyboard, word) {
  let result = keyboard.indexOf(word[0]);

  for (let i = 1; i < word.length; i++) {
    result += Math.abs(
      keyboard.indexOf(word[i]) - keyboard.indexOf(word[i - 1])
    );
  }
  return result;
}

module.exports = calculateTime;
