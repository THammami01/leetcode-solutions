package solutions.problem_0027_remove_element;

// LINK: https://leetcode.com/problems/remove-element/

public class Solution {
    public int removeElement(int[] nums, int val) {
        int k = nums.length;
        for (int i = 0; i < k; i++)
            if (nums[i] == val) {
                if (nums.length - (i + 1) >= 0)
                    // WITH SOME HELP FROM IntelliJ :D
                    System.arraycopy(
                            nums,
                            i + 1,
                            nums,
                            i + 1 - 1,
                            nums.length - (i + 1)
                    );
                k--;
                i--;
            }

        return k;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().removeElement(new int[]{3, 2, 2, 3}, 3));
    }
}
