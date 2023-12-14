// https://leetcode.com/problems/leaf-similar-trees/?envType=study-plan-v2&envId=leetcode-75

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
const depthFirstLeafSequence = (root: TreeNode | null): number[] => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val];

  const leftVals = depthFirstLeafSequence(root.left);
  const rightVal = depthFirstLeafSequence(root.right);
  return [...leftVals, ...rightVal];
};

const leafSimilar = (root1: TreeNode | null, root2: TreeNode | null): boolean =>
  depthFirstLeafSequence(root1).join(",") ===
  depthFirstLeafSequence(root2).join(",");
