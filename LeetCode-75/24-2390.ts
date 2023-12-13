// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

const removeStars = (s: string): string => {
  const arr: string[] = [];

  for (const c of s)
    if (c === "*") arr.pop();
    else arr.push(c);

  return arr.join("");
};
