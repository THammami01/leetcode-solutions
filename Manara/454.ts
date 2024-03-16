// 454. 4Sum II
// https://leetcode.com/problems/4sum-ii/description/

const fourSumCount = (
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number => {
  let count = 0,
    map = new Map();

  for (const el1 of nums1)
    for (const el2 of nums2) {
      const sum: number = el1 + el2;
      map.set(sum, (map.get(sum) || 0) + 1);
    }

  for (const el1 of nums3)
    for (const el2 of nums4) {
      const target: number = -el1 - el2;
      if (map.has(target)) count += map.get(target)!;
    }

  return count;
};
