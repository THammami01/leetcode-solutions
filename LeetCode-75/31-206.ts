// https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75

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
  let resHead = null;

  while (head) {
    resHead = new ListNode(head.val, resHead);
    head = head.next;
  }  
  
  return resHead;
};
