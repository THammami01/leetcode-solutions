// 503. Next Greater Element II
// https://leetcode.com/problems/next-greater-element-ii/description/

// =======================
// TIME COMPLEXITY: O(N^2)
// =======================

// const getNextGreatElement = (nums: number[], startIdx: number, endIdx: number, val: number): number => {
//     for (let i = startIdx; i < endIdx; i++)
//         if (nums[i] > val) return nums[i];

//     return val;
// }

// const nextGreaterElements = (nums: number[]): number[] => {
//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         let val = getNextGreatElement(nums, i + 1, nums.length, nums[i])
//         if (val === nums[i]) val = getNextGreatElement(nums, 0, i, val)
//         res.push(val === nums[i] ? -1 : val);
//     }

//     return res;
// };

// const nextGreaterElements = (nums: number[]): number[] => {
//     const res = [];

//     for (let i = 0; i < nums.length; i++) {
//         let curr = nums[i];

//         for (let j = i + 1; j < nums.length + i; j++) {
//             const correctJ = j % nums.length;

//             if (nums[correctJ] > curr) {
//                 curr = nums[correctJ];
//                 break;
//             }
//         }

//         res.push(curr === nums[i] ? -1 : curr);
//     }

//     return res;
// };

const nextGreaterElements = (nums: number[]): number[] => {
  const stack: number[] = [];
  const res = Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length * 2; i++) {
    while (
      stack.length &&
      nums[stack[stack.length - 1]] < nums[i % nums.length]
    )
      res[stack.pop()!] = nums[i % nums.length];

    stack.push(i % nums.length);
  }

  return res;
};
