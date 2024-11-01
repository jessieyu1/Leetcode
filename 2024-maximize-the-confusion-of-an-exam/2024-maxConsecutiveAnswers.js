function maxConsecutiveAnswers(answerKey, k) {
  function maxOfChar(char) {
    let max = 0;
    let left = 0;
    let count = 0;
    for (let right = 0; right < answerKey.length; right++) {
      if (answerKey[right] !== char) count++;

      while (count > k) {
        if (answerKey[left] !== char) count--;
        left++;
      }

      max = Math.max(max, right - left + 1);
    }

    return max;
  }
  return Math.max(maxOfChar("T"), maxOfChar("F"));
}

module.exports = maxConsecutiveAnswers;
