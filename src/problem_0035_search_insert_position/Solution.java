package problem_0035_search_insert_position;

// LINK: https://leetcode.com/problems/search-insert-position/

public class Solution {
    // TODO: SOLVE IT USING BINARY SEARCH ALGORITHM
    public int searchInsert(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++)
            if (nums[i] >= target) return i;
        return nums.length;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().searchInsert(new int[]{1, 3, 5, 6}, 8));
    }
}
