// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75

const longestSubarray = (nums: number[]): number => {
  // IF YOU ENCOUTER A ZERO, SAVE ITS IDX AND CONTINUE
  // IF YOU ENCOUTER ANOTHER ZERO, MOVE FIRST IDX TO LAST ZERO IDX + 1
  // EACH TIME CALCULATE THE LONGEST
  // IF YOU'VE NEVER ENCOUTERED A ZERO, RETURN num.length - 1

  let firstIdx = 0,
    lastIdx = 0,
    longest = 0,
    lastZeroIdx = -1;

  // O(N) SOLUTION
  while (lastIdx < nums.length) {
    if (nums[lastIdx]) {
      const tempLongest = lastIdx - firstIdx + (lastZeroIdx === -1 ? 1 : 0);
      if (tempLongest > longest) longest = tempLongest;
    } else if (lastZeroIdx === -1) {
      lastZeroIdx = lastIdx;
    } else {
      firstIdx = lastZeroIdx + 1;
      lastZeroIdx = lastIdx;
    }

    lastIdx++;
  }

  if (lastZeroIdx === -1) longest--;

  return longest;
};
