package problem_0020_valid_parentheses;

// LINK: https://leetcode.com/problems/valid-parentheses/

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public boolean isValid(String s) {
        List<Character> l = new ArrayList<>();

        char lastAddedChar = 0;
        for (char c : s.toCharArray()) {
            if (!l.isEmpty()) lastAddedChar = l.get(l.size() - 1);

            if (!l.isEmpty() && (lastAddedChar == '[' && c == ']'
                    || lastAddedChar == '(' && c == ')'
                    || lastAddedChar == '{' && c == '}'))
                l.remove(l.size() - 1);
            else
                l.add(c);
        }

        return l.isEmpty();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.isValid("()[]{}"));
        System.out.println(solution.isValid("(]"));
        System.out.println(solution.isValid("{[]}"));
        System.out.println(solution.isValid("(){}}{"));
    }
}
