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
const depthFirstPathSumCount = (
  root: TreeNode | null,
  targetSum: number,
  pathSumMap: Map<TreeNode, number>
): number[] => {
  if (root === null) return [0, 0];

  pathSumMap.set(root, root.val);

  let localPathSumCount = 0;

  pathSumMap.forEach((val, key) => {
    if (key !== root) val += root.val;
    if (val === targetSum) localPathSumCount++;
    pathSumMap.set(key, val);
  });

  const [leftTreePathSumCount, leftChildVal] = depthFirstPathSumCount(
    root.left,
    targetSum,
    pathSumMap
  );

  if (leftChildVal)
    pathSumMap.forEach((val, key) => pathSumMap.set(key, val - leftChildVal));

  const [rightTreePathSumCount, rightChildVal] = depthFirstPathSumCount(
    root.right,
    targetSum,
    pathSumMap
  );

  pathSumMap.delete(root);

  if (rightChildVal)
    pathSumMap.forEach((val, key) => pathSumMap.set(key, val - rightChildVal));

  return [
    localPathSumCount + leftTreePathSumCount + rightTreePathSumCount,
    root.val,
  ];
};

const pathSum = (root: TreeNode | null, targetSum: number): number =>
  depthFirstPathSumCount(root, targetSum, new Map())[0];
