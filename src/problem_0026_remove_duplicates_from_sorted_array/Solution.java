package problem_0026_remove_duplicates_from_sorted_array;

// LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

public class Solution {
    public int removeDuplicates(int[] nums) {
        int k = nums.length;
        for (int i = 0; i < k - 1; i++)
            if (nums[i] == nums[i + 1]) {
                for (int j = i + 1; j < k; j++)
                    nums[j - 1] = nums[j];
                k--;
                i--;
            }

        return k;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().removeDuplicates(new int[]{1, 1, 2}));
    }
}
