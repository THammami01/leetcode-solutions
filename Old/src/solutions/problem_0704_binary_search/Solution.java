package solutions.problem_0704_binary_search;

// LINK: https://leetcode.com/problems/binary-search/

public class Solution {
    // LINEAR SEARCH ALGORITHM, TIME COMPLEXITY WORST CASE: O(n)
    // public int search(int[] nums, int target) {
    //     for (int i = 0; i < nums.length; i++)
    //         if (target == nums[i]) return i;
    //     return -1;
    // }

    // BINARY SEARCH ALGORITHM, ITERATIVE SOLUTION, TIME COMPLEXITY WORST CASE: O(log n)
    public int search(int[] nums, int target) {
        int min = 0, max = nums.length - 1;
        while (max > min) {
            int mid = min + (max - min) / 2; // OR: int mid = (min + max) / 2;
            if (target == nums[mid]) return mid;
            else if (target < nums[mid]) max = mid - 1;
            else min = mid + 1;
        }
        return -1;
    }

    // BINARY SEARCH ALGORITHM, RECURSIVE SOLUTION, TIME COMPLEXITY WORST CASE: O(log n)
    public int searchRec(int[] nums, int target, int min, int max) {
        if (min >= max) return -1;
        int mid = min + (max - min) / 2;
        if (target == nums[mid]) return mid;
        if (target < nums[mid]) return searchRec(nums, target, min, mid - 1);
        else return searchRec(nums, target, mid + 1, max);
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-1, 0, 3, 5, 9, 12};
        int target = 9, min = 0, max = nums.length - 1;
        System.out.println(new Solution().search(nums, target));
        System.out.println(new Solution().searchRec(nums, target, min, max));
    }
}
