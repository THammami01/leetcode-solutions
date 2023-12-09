// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

const VOWELS = ["a", "e", "i", "o", "u"];

const reverseVowels = (str: string): string => {
  const savedVowels: string[] = [];
  const savedIdxs: number[] = [];
  const newStrArr = str.split("");
  str = str.toLowerCase();

  for (let i = 0; i <= str.length; i++)
    if (VOWELS.includes(str[i])) {
      savedIdxs.push(i);
      savedVowels.push(newStrArr[i]);
    }

  savedIdxs.forEach(
    (vowelIdx, idx) =>
      (newStrArr[vowelIdx] = savedVowels[savedIdxs.length - idx - 1])
  );

  return newStrArr.join("");
};
