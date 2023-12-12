// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

const closeStrings = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) return false;

  const word1LettersFrequency = new Map(),
    word2LettersFrequency = new Map();

  // O(N) SOLUTION
  for (let i = 0; i < word1.length; i++) {
    word1LettersFrequency.set(
      word1[i],
      word1LettersFrequency.has(word1[i])
        ? word1LettersFrequency.get(word1[i]) + 1
        : 1
    );

    word2LettersFrequency.set(
      word2[i],
      word2LettersFrequency.has(word2[i])
        ? word2LettersFrequency.get(word2[i]) + 1
        : 1
    );
  }

  const word1Arr = [
      ...word1LettersFrequency.keys(),
      ...word1LettersFrequency.values(),
    ].sort(), // NOSONAR
    word2Arr = [
      ...word2LettersFrequency.keys(),
      ...word2LettersFrequency.values(),
    ].sort(); // NOSONAR

  return word1Arr.join("") === word2Arr.join("");
};
