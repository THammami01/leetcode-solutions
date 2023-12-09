// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

const reverseWords = (str: string): string =>
  str
    .match(/[^\s]+/g)
    ?.reverse()
    .join(" ") || "";
