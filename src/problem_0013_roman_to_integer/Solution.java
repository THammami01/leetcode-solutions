package problem_0013_roman_to_integer;

import java.util.ArrayList;

// LINK: https://leetcode.com/problems/roman-to-integer/
// I 1 | V 5 | X 10 | L 50 | C 100 | D 500 | M 1000
// LVIII   (50 5 1 1 1)               = 58
// MCMXCIV (1000 100 1000 10 100 1 5) = 1994
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

public class Solution {
    public int romanToInt(String s) {
        ArrayList<Integer> l = new ArrayList<>();
        for (char c : s.toCharArray())
            switch (c) {
                case 'I':
                    l.add(1);
                    break;
                case 'V':
                    l.add(5);
                    break;
                case 'X':
                    l.add(10);
                    break;
                case 'L':
                    l.add(50);
                    break;
                case 'C':
                    l.add(100);
                    break;
                case 'D':
                    l.add(500);
                    break;
                case 'M':
                    l.add(1000);
                    break;
                default:
                    break;
            }

        for (int i = 0; i < l.size(); i++)
            if (i + 1 < l.size() && l.get(i) < l.get(i + 1)) {
                l.set(i + 1, l.get(i + 1) - l.get(i));
                l.remove(i);
            }

        int sum = 0;
        for (int n : l) sum += n;
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().romanToInt("MCMXCIV"));
    }
}
