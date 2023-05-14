function areSentenceSimilar(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similarWords = new Set();
  for (const pair of similarPairs) {
    const [word1, word2] = pair;
    similarWords.add(`${word1}#${word2}`);
    similarWords.add(`${word2}#${word1}`);
  }

  for (let i = 0; i < sentence1.length; i++) {
    if (
      sentence1[i] !== sentence2[i] &&
      !similarWords.has(`${sentence1[i]}#${sentence2[i]}`)
    ) {
      return false;
    }
  }

  return true;
}

module.exports = areSentenceSimilar;
