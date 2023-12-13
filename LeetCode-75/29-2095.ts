// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

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
const deleteMiddle = (head: ListNode | null): ListNode | null => {
  let tempHead = head,
    size = 0;

  while (tempHead) {
    tempHead = tempHead.next;
    size++;
  }

  const middleNodeIdx = Math.floor(size / 2);

  if (middleNodeIdx === 0) return head?.next ?? null;

  let i = 1,
    prev = head,
    curr = head?.next ?? null;

  while (i !== middleNodeIdx && curr) {
    prev = curr;
    curr = curr?.next ?? null;
    i++;
  }

  prev.next = curr?.next ?? null;
  return head;
};
