package problem_0001_two_sum;

// LINK: https://leetcode.com/problems/two-sum/

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i=0; i<nums.length; i++)
            for(int j=0; j<nums.length; j++)
                if(nums[i] + nums[j] == target && i != j)
                    return new int[]{i, j};
        return null;
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 4};
        int target = 6;
        int[] output = new Solution().twoSum(nums, target);
        for (int n: output) System.out.println(n);
    }
}
