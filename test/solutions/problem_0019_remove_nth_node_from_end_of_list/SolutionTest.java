package solutions.problem_0019_remove_nth_node_from_end_of_list;

// LINK: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void removeNthFromEnd() {
        Solution solution = new Solution();

        ListNode head = solution.getInitialHead(); // [1, 2, 3, 4, 5]
        assertEquals(solution.getLength(solution.removeNthFromEnd(head, 0)), 5);

        head = solution.getInitialHead();
        assertEquals(solution.getLength(solution.removeNthFromEnd(head, 1)), 4);

        head = solution.getInitialHead();
        assertEquals(solution.getLength(solution.removeNthFromEnd(head, 3)), 4);

        head = solution.getInitialHead();
        assertEquals(solution.getLength(solution.removeNthFromEnd(head, 5)), 4);

        head = solution.getInitialHead();
        assertEquals(solution.getLength(solution.removeNthFromEnd(head, 6)), 5);
    }
}