// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-nocheck
const pairSum = (head: ListNode | null): number => {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const halfSize = arr.length / 2;
  let max = 0;

  for (let i = 0; i < halfSize; i++)
    max = Math.max(max, arr[i] + arr[arr.length - 1 - i])

  return max;
};
