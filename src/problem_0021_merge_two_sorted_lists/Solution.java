package problem_0021_merge_two_sorted_lists;

// LINK: https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    /**
     * @noinspection unused
     */
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode mergeTwoLists(ListNode ln1, ListNode ln2) {
        if (ln1 == null && ln2 == null) return null;
        if (ln1 == null) return ln2;
        if (ln2 == null) return ln1;
        ListNode mergedLN = null, head = null;

        while (ln1 != null || ln2 != null) {
            if (mergedLN == null) {
                mergedLN = new ListNode();
                head = mergedLN;
            } else {
                mergedLN.next = new ListNode();
                mergedLN = mergedLN.next;
            }

            if (ln1 == null) {
                mergedLN.val = ln2.val;
                mergedLN.next = ln2.next;
                break;
            }
            if (ln2 == null) {
                mergedLN.val = ln1.val;
                mergedLN.next = ln1.next;
                break;
            }

            int minVal;
            if (ln1.val <= ln2.val) {
                minVal = ln1.val;
                ln1 = ln1.next;
            } else {
                minVal = ln2.val;
                ln2 = ln2.next;
            }

            mergedLN.val = minVal;
        }

        return head;
    }

    public ListNode[] getInitialHeads() {
        ListNode ln1, ln2, head1, head2;

        ln1 = new ListNode(1);
        ln2 = new ListNode(1);
        head1 = ln1;
        head2 = ln2;

        ln1.next = new ListNode(2);
        ln2.next = new ListNode(3);
        ln1 = ln1.next;
        ln2 = ln2.next;

        ln1.next = new ListNode(4);
        ln2.next = new ListNode(4);

        return new ListNode[]{head1, head2};
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
        ListNode[] lns = solution.getInitialHeads();
        ListNode mergedLN = solution.mergeTwoLists(lns[0], lns[1]);
        solution.displayListNode(mergedLN);
    }
}
