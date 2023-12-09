// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

const compress = (chars: string[]): number => {
  if (!chars.length) return 0;

  let compressed = "",
    currChar = chars[0],
    currCharCount = 1;

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === currChar) currCharCount++;
    else {
      compressed =
        compressed + currChar + (currCharCount === 1 ? "" : currCharCount);
      currChar = chars[i];
      currCharCount = 1;
    }
  }

  compressed =
    compressed + currChar + (currCharCount === 1 ? "" : currCharCount);

  for (let i = 0; i < compressed.length; i++) chars[i] = compressed[i];

  return compressed.length;
};
