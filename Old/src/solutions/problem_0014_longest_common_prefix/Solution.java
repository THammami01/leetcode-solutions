package solutions.problem_0014_longest_common_prefix;

import java.util.Arrays;

// LINK: https://leetcode.com/problems/longest-common-prefix/

public class Solution {
    public String longestCommonPrefix(String[] strs) {
        // MORE ABOUT STREAMS: https://www.geeksforgeeks.org/stream-in-java/
        String shortestStr = Arrays.stream(strs)
                .reduce(strs[0], (res, s) -> s.length() < res.length() ? s : res);

        StringBuilder prefix = new StringBuilder();

        outerloop:
        for (int i = 0; i < shortestStr.length(); i++) {
            for (String s : strs)
                if (s.charAt(i) != shortestStr.charAt(i)) break outerloop;
            prefix.append(shortestStr.charAt(i));
        }

        return String.valueOf(prefix);
    }

    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight"};
        System.out.println(new Solution().longestCommonPrefix(strs));
    }
}