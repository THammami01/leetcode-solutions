// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const nums1Set = new Set(nums1),
    nums2Set = new Set(nums2);

  return [
    [...nums1Set].filter((val) => !nums2Set.has(val)),
    [...nums2Set].filter((val) => !nums1Set.has(val)),
  ];
};
