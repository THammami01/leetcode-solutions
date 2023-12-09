package solutions.problem_0283_move_zeroes;

// LINK: https://leetcode.com/problems/move-zeroes

import helpers.Arrays;

public class Solution {
    public void moveZeroes(int[] nums) {
        for (int i = 0, zeros = 0; i < nums.length - zeros;)
            if (nums[i] == 0) {
                //noinspection ManualArrayCopy
                for (int j = i; j < nums.length - 1; j++)
                    nums[j] = nums[j + 1];

                nums[nums.length - 1] = 0;
                zeros++;
            } else i++;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{0, 1, 0, 3, 12};
        new Solution().moveZeroes(nums);

        Arrays.display(Arrays.boxArray(nums));
    }
}
