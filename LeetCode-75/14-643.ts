// https://leetcode.com/problems/maximum-average-subarray-i/submissions/1117627761/?envType=study-plan-v2&envId=leetcode-75

const findMaxAverage = (nums: number[], k: number): number => {
  if (nums.length < k) return 0;

  let maxSum = 0;

  // O(N) SOLUTION
  for (let i = 0; i < k; i++) maxSum += nums[i];

  for (let i = 1, tempSum = maxSum; i <= nums.length - k; i++) {
    tempSum -= nums[i - 1] + nums[i - 1 + k];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return Number((maxSum / k).toFixed(5));
};
