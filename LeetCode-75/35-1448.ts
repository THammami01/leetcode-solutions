// https://leetcode.com/problems/path-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

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
const depthFirstGoodCount = (root: TreeNode | null, max: number): number => {
  if (root === null) return 0;

  max = Math.max(root.val, max);

  return (
    (root.val === max ? 1 : 0) +
    depthFirstGoodCount(root.left, max) +
    depthFirstGoodCount(root.right, max)
  );
};

const goodNodes = (root: TreeNode | null): number =>
  depthFirstGoodCount(root, root.val);
