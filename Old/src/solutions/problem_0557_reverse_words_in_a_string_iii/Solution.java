package solutions.problem_0557_reverse_words_in_a_string_iii;

// LINK: https://leetcode.com/problems/reverse-words-in-a-string-iii

public class Solution {
    public String reverseString(String s) {
        char[] charArr = s.toCharArray();
        //noinspection DuplicatedCode
        for (int i = 0; i < charArr.length / 2; i++) {
            char temp = charArr[i];
            charArr[i] = charArr[charArr.length - i - 1];
            charArr[charArr.length - i - 1] = temp;
        }
        return String.valueOf(charArr);
    }

    public String reverseWords(String s) {
        String[] arr = s.split(" ");
        for (int i = 0; i < arr.length; i++) arr[i] = reverseString(arr[i]);
        return String.join(" ", arr);
    }

    public static void main(String[] args) {
        System.out.println(new Solution().reverseString("Let's take LeetCode contest."));
    }
}
