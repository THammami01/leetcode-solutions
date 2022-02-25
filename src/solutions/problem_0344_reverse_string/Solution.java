package solutions.problem_0344_reverse_string;

// LINK: https://leetcode.com/problems/reverse-string

import helpers.Arrays;

public class Solution {
    public void reverseString(char[] s) {
        for (int i = 0; i < s.length / 2; i++) {
            char temp = s[i];
            s[i] = s[s.length - i - 1];
            s[s.length - i - 1] = temp;
        }
    }

    public static void main(String[] args) {
        char[] arr = new char[]{'h', 'e', 'l', 'l', 'o'};
        new Solution().reverseString(arr);
        Arrays.display(Arrays.boxArray(arr));
    }
}
