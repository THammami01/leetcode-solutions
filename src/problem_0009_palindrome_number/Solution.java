package problem_0009_palindrome_number;

// LINK: https://leetcode.com/problems/palindrome-number/

public class Solution {
    public String reverse(String s) {
        StringBuilder temp = new StringBuilder();
        for (int i = s.length() - 1; i >= 0; i--)
            temp.append(s.charAt(i));
        return String.valueOf(temp);
    }

    public boolean isPalindrome(int x) {
        String s = String.valueOf(x);
        return s.equals(reverse(s));
    }

    public static void main(String[] args) {
        System.out.println(new Solution().isPalindrome(1234567899));
    }
}
