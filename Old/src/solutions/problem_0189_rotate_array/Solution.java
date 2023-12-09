package solutions.problem_0189_rotate_array;

// LINK: https://leetcode.com/problems/rotate-array/

public class Solution {
    public void rotate(int[] nums, int k) {
        k = k % nums.length;
        int[] rotatedNums = new int[nums.length];
        for (int i = 0; i < nums.length; i++)
            rotatedNums[(i + k) % nums.length] = nums[i];
        // for (int i = 0; i < nums.length; i++)
        //     nums[i] = rotatedNums[i];
        System.arraycopy(rotatedNums, 0, nums, 0, nums.length);
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 2, 3, 4, 5, 6, 7};
        new Solution().rotate(nums, 3);
        for (int n : nums) System.out.print(n + " ");
        System.out.println();
    }
}
