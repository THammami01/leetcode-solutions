// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

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
const reverseList = (head: ListNode | null): ListNode | null => {
  let curr = head, prev = null, next = null;
  
  while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  return prev;
};
