package solutions.problem_0012_integer_to_roman;

// LINK: https://leetcode.com/problems/integer-to-roman/

import java.util.LinkedHashMap;
import java.util.stream.Collectors;

public class Solution {
    final public static LinkedHashMap<String, Double> ROMANS = new LinkedHashMap<>();

    static {
        ROMANS.put("M", 1000.0);
        ROMANS.put("CM", 900.0);
        ROMANS.put("D", 500.0);
        ROMANS.put("CD", 400.0);
        ROMANS.put("C", 100.0);
        ROMANS.put("XC", 90.0);
        ROMANS.put("L", 50.0);
        ROMANS.put("XL", 40.0);
        ROMANS.put("X", 10.0);
        ROMANS.put("IX", 9.0);
        ROMANS.put("V", 5.0);
        ROMANS.put("IV", 4.0);
        ROMANS.put("I", 1.0);
    }

    public String intToRoman(int num) {
        var ref = new Object() {
            int temp = num;
        };

        return ROMANS.entrySet().stream().map((e) -> {
            int currRomanCount = (int) (Math.floor(ref.temp / e.getValue()));
            ref.temp = (int) (ref.temp % e.getValue());
            return e.getKey().repeat(currRomanCount);
        }).collect(Collectors.joining(""));
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        System.out.println(solution.intToRoman(2022));
    }
}
