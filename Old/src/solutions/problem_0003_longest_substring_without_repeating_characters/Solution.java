package solutions.problem_0003_longest_substring_without_repeating_characters;

// LINK: https://leetcode.com/problems/longest-substring-without-repeating-characters/

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            StringBuilder sb = new StringBuilder().append(s.charAt(i));

            for (int j = i + 1; j < s.length(); j++) {
                int idx = sb.indexOf(String.valueOf(s.charAt(j)));
                if (idx == -1) sb.append(s.charAt(j));
                else break;
            }

            if (sb.length() >= max) max = sb.length();
        }
        return max;
    }
}
