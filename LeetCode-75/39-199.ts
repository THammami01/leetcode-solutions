// https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=leetcode-75

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
const rightSideView = (root: TreeNode | null): number[] => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while (queue.length) {
    const initialQueueLength = queue.length;

    for (let i = 0; i < initialQueueLength; i++) {
      const current = queue.shift();
      if (i === initialQueueLength - 1) values.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return values;
};
