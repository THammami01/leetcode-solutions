// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

const longestOnes = (nums: number[], k: number): number => {
  // NOSONAR
  if (nums.length <= k) return nums.length;

  let firstIdx = 0,
    lastIdx = 0,
    flippedZerosCount = 0,
    longest = 0;

  // O(N) SOLUTION
  while (flippedZerosCount !== k && lastIdx < nums.length) {
    if (!nums[lastIdx]) flippedZerosCount++;
    lastIdx++;
  }

  // lastIdx IS AT: LAST SUBARRAY IDX + 1

  // USE lastIdx AND firstIdx TO CALCULATE SUBARRAY LENGTH
  longest = lastIdx - firstIdx;

  while (lastIdx < nums.length) {
    if (!nums[lastIdx]) {
      if (!nums[firstIdx]) flippedZerosCount++;
      flippedZerosCount--;
      firstIdx++;
    } else if (flippedZerosCount !== k) {
      if (nums[firstIdx]) flippedZerosCount--;
      flippedZerosCount++;
      firstIdx++;
    } else {
      const tempLongest = lastIdx - firstIdx + 1;
      if (tempLongest > longest) longest = tempLongest;
    }

    lastIdx++;
  }

  return longest;
};
