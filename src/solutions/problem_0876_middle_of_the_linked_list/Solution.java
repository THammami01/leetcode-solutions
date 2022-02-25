package solutions.problem_0876_middle_of_the_linked_list;

// LINK: https://leetcode.com/problems/middle-of-the-linked-list

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @noinspection DuplicatedCode
 */
public class Solution {
    public ListNode middleNode(ListNode head) {
        int length = 0;
        ListNode ln = head;

        while (ln != null) {
            length++;
            ln = ln.next;
        }

        int middle = length / 2;
        ln = head;

        for (int i = 0; i < middle; i++) ln = ln.next;
        return ln;
    }

    public ListNode getInitialHead() {
        ListNode ln, head;

        ln = new ListNode(1);
        head = ln;

        ln.next = new ListNode(2);
        ln = ln.next;

        ln.next = new ListNode(3);
        ln = ln.next;

        ln.next = new ListNode(4);
        ln = ln.next;

        ln.next = new ListNode(5);
        return head;
    }

    public void displayListNode(ListNode ln) {
        while (ln != null) {
            System.out.print(ln.val + " ");
            ln = ln.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        ListNode head = solution.getInitialHead();
        solution.displayListNode(solution.middleNode(head));
    }
}
