package problem_0977_squares_of_a_sorted_array;

// LINK: https://leetcode.com/problems/squares-of-a-sorted-array/

public class Solution {
    void bubbleSort(int[] array) {
        int size = array.length;
        for (int i = 0; i < size - 1; i++)
            for (int j = 0; j < size - i - 1; j++)
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
    }

    public int[] sortedSquares(int[] nums) {
        for (int i = 0; i < nums.length; i++)
            nums[i] = nums[i] * nums[i];
        this.bubbleSort(nums);
        return nums;
    }

    public static void main(String[] args) {
        for (int n : new Solution().sortedSquares(new int[]{-4, -1, 0, 3, 10}))
            System.out.print(n + " ");
        System.out.println();
    }
}
