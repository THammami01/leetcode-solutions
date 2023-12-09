package solutions.problem_0167_two_sum_ii_input_array_is_sorted;

// LINK: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

import java.util.List;
import java.util.ArrayList;

import helpers.Arrays;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        List<Integer> seen = new ArrayList<Integer>();
        for (int i = 0; i < nums.length; i++) {
            if(seen.contains(nums[i])) continue;
            for (int j = i + 1; j < nums.length; j++)
                if (nums[i] + nums[j] == target)
                    return new int[]{i + 1, j + 1};
            seen.add(nums[i]);
        }
        return null;
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] output = new Solution().twoSum(nums, target);
        Arrays.display(Arrays.boxArray(output));
    }
}
