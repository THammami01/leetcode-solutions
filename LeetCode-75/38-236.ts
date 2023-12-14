// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

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
const depthFirstLowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode[] => {
  if (root === null) return [];

  const res = [
    ...depthFirstLowestCommonAncestor(root.left, p, q),
    ...depthFirstLowestCommonAncestor(root.right, p, q),
  ];

  if (res.length === 3) return res;

  if (res.length === 2 || root === p || root === q) {
    res.push(root);
    if (res.length === 2) res.push(root);
  }

  return res;
};

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => depthFirstLowestCommonAncestor(root, p, q)[2];
