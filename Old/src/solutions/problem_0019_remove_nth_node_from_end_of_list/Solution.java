package solutions.problem_0019_remove_nth_node_from_end_of_list;

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
    public int getLength(ListNode head) {
        int length = 0;
        while (head != null) {
            length++;
            head = head.next;
        }
        return length;
    }

    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null || head.next == null && n == 1) return null;

        ListNode ln = head;
        int length = getLength(head);

        if (n == length) return head.next;
        if (n > length) return head;

        int i = 0, prevLnIdxToRemove = length - n - 1;
        ln = head;
        while (i != prevLnIdxToRemove) {
            ln = ln.next;
            i++;
        }

        if (ln.next != null) ln.next = ln.next.next;
        return head;
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
        solution.displayListNode(solution.removeNthFromEnd(head, 3));
    }
}
