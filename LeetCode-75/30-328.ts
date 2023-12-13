// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan-v2&envId=leetcode-75

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
const oddEvenList = (head: ListNode | null): ListNode | null => {
  let i = 0, oddHead = null, tempOddHead = null, evenHead = null, tempEvenHead = null;
  
  while (head) {
    if (i % 2) {
      if (oddHead) {
        tempOddHead.next = new ListNode(head.val);
        tempOddHead = tempOddHead.next;
      } else {
        oddHead = new ListNode(head.val);
        tempOddHead = oddHead;
      };
    } else {
      if (evenHead) {
        tempEvenHead.next = new ListNode(head.val);
        tempEvenHead = tempEvenHead.next;
      } else {
        evenHead = new ListNode(head.val);
        tempEvenHead = evenHead;
      };
    }
    
    head = head.next;
    i++;
  }

  if (evenHead) {
    tempEvenHead.next = oddHead;
    return evenHead;
  }

  return oddHead;
};
