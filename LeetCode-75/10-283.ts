// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

const moveZeroes = (nums: number[]): void => {
  for (let i = 0, nonZerosCount = nums.length; i < nonZerosCount; )
    if (nums[i] === 0) {
      nonZerosCount--;

      for (let j = i; j < nonZerosCount; j++) nums[j] = nums[j + 1];

      nums[nonZerosCount] = 0;
    } else i++;
};
