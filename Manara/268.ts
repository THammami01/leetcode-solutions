// 268. Missing Number
// https://leetcode.com/problems/missing-number/description/

const missingNumber = (nums: number[]): number => {
  let sum1 = 0;

  for (const el of nums) sum1 += el;

  const sum2 = (nums.length * (nums.length + 1)) / 2;

  return sum2 - sum1;
};
