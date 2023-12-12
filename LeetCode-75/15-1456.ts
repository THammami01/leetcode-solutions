// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

const VOWEL_LETTERS = ["a", "e", "i", "o", "u"];

const maxVowels = (s: string, k: number): number => {
  if (s.length < k) return 0;

  let max = 0;

  // O(N) SOLUTION
  for (let i = 0; i < k; i++) if (VOWEL_LETTERS.includes(s[i])) max++;

  for (let i = 1, temp = max; i <= s.length - k; i++) {
    if (VOWEL_LETTERS.includes(s[i - 1])) temp--;
    if (VOWEL_LETTERS.includes(s[i - 1 + k])) temp++;
    if (temp > max) max = temp;
  }

  return max;
};
