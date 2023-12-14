// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// @ts-nocheck
const depthFirstLongestZigZagPath = (
  root: TreeNode | null,
  direction: "L" | "R" | null
): { currMax: number; max: number } => {
  if (root === null) return { currMax: 0, max: 0 };

  const rightRes = depthFirstLongestZigZagPath(root.right, "R");
  const leftRes = depthFirstLongestZigZagPath(root.left, "L");

  const max = Math.max(rightRes.max, leftRes.max);

  if (direction === "L") {
    const currMax = rightRes.currMax + 1;
    return { currMax, max: Math.max(currMax, max) };
  } else if (direction === "R") {
    const currMax = leftRes.currMax + 1;
    return { currMax, max: Math.max(currMax, max) };
  } else {
    return { currMax: max, max };
  }
};

const longestZigZag = (root: TreeNode | null): number =>
  depthFirstLongestZigZagPath(root, null).max;
