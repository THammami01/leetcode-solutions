// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

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
const maxLevelSum = (root: TreeNode | null): number => {
  const queue = [root];

  let level = 1,
    maxSum = root.val,
    maxLevel = 1;

  while (queue.length) {
    const initialQueueLength = queue.length;
    let tempSum = 0;

    for (let i = 0; i < initialQueueLength; i++) {
      const current = queue.shift();
      tempSum += current.val;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    if (tempSum > maxSum) {
      maxLevel = level;
      maxSum = tempSum;
    }

    level++;
  }

  return maxLevel;
};
