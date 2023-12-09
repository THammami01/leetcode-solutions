package solutions.problem_0058_length_of_last_word;

// LINK: https://leetcode.com/problems/length-of-last-word

public class Solution {
    public int lengthOfLastWord(String s) {
        String[] arr = s.split(" ");
        return arr[arr.length - 1].length();
    }

    public static void main(String[] args) {
        System.out.println(new Solution().lengthOfLastWord("Hello, World!"));
    }
}
