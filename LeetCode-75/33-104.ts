// https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=leetcode-75

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
const depthFirstMaxDepth = (root: TreeNode | null, depth: number): number => {
  if (root === null) return depth;

  const leftDepth = depthFirstMaxDepth(root.left, depth + 1);
  const rightDepth = depthFirstMaxDepth(root.right, depth + 1);
  return Math.max(leftDepth, rightDepth);
};

const maxDepth = (root: TreeNode | null): number => depthFirstMaxDepth(root, 0);
