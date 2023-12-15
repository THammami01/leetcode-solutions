// https://leetcode.com/problems/delete-node-in-a-bst/submissions/1119984696/?envType=study-plan-v2&envId=leetcode-75

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
const findMinBSTNode = (root: TreeNode | null): TreeNode | null =>
  root.left ? findMinBSTNode(root.left) : root;

const deleteBSTNode = (root: TreeNode | null, key: number): TreeNode | null => {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteBSTNode(root.left, key);
    return root;
  }

  if (key > root.val) {
    root.right = deleteBSTNode(root.right, key);
    return root;
  }

  // STARTING FROM HERE: key === root.val
  if (root.left && root.right) {
    const inorderSuccessor = findMinBSTNode(root.right);
    root.val = inorderSuccessor.val;
    root.right = deleteBSTNode(root.right, inorderSuccessor.val);
    return root;
  }

  if (root.left) return root.left;
  if (root.right) return root.right;
  return null; // HERE: !root.left && !root.right
};

const deleteNode = (root: TreeNode | null, key: number): TreeNode | null =>
  deleteBSTNode(root, key);
