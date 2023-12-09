// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75

const increasingTriplet = (nums: number[]): boolean => {
  // O(N^3) SOLUTION
  // if (nums.length < 3) return false;

  // for (let i = 0; i < nums.length - 2; i++)
  //   for (let j = i + 1; j < nums.length - 1; j++)
  //     if (nums[j] > nums[i])
  //       for (let k = j + 1; k < nums.length; k++)
  //         if (nums[k] > nums[j]) return true;

  // return false;

  // O(N) SOLUTION
  for (
    let i = 0, firstMin = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;
    i < nums.length;
    i++
  ) {
    if (nums[i] <= firstMin) firstMin = nums[i];
    else if (nums[i] <= secondMin) secondMin = nums[i];
    else return true;
  }

  return false;
};
