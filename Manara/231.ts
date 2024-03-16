// 231. Power of Two
// https://leetcode.com/problems/power-of-two/description/

const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) return false;

  while (n > 1)
    if (!(n % 1)) n /= 2;
    else return false;

  return true;
};
