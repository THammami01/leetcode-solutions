// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

const mergeAlternately = (word1: string, word2: string): string => {
  const minLen = word1.length < word2.length ? word1.length : word2.length;

  const word2Chars = word2.substring(0, minLen).split("");

  return (
    word1
      .substring(0, minLen)
      .split("")
      .map((char, idx) => char + word2Chars[idx])
      .join("") +
    word1.substring(minLen) +
    word2.substring(minLen)
  );
};
