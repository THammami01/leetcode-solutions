package problem_0278_first_bad_version;

import helpers.ExecutionTimer;
import helpers.RandomNumberGenerator;

// LINK: https://leetcode.com/problems/first-bad-version/

public class Solution {
    private final int firstBad;

    public Solution(int n) {
        firstBad = RandomNumberGenerator.between(1, n);
        System.out.println("FIRST BAD VERSION GENERATED: " + firstBad);
    }

    public boolean isBadVersion(int version) {
        return version >= firstBad;
    }

    public int firstBadVersionLinearSolution(int n) {
        // TIME COMPLEXITY WORST CASE: log(n)
        for (int i = 1; i <= n; i++)
            if (isBadVersion(i)) return i;
        return -1;
    }

    public int firstBadVersion(int n) {
        int mid = 1, min = 1, max = n;
        while (max >= min) {
            mid = min + (max - min) / 2;
            boolean isMidBadVersion = isBadVersion(mid);
            if (isMidBadVersion && !isBadVersion(mid - 1)) return mid;
            if (isMidBadVersion) max = mid - 1;
            else min = mid + 1;
        }
        return mid;
    }

    public static void main(String[] args) {
        int n = 2147483647;
        Solution solution = new Solution(n);

        ExecutionTimer ex = new ExecutionTimer();
        System.out.println("FIRST BAD VERSION FOUND: " + solution.firstBadVersionLinearSolution(n));
        ex.stop();

        ex.start();
        System.out.println("FIRST BAD VERSION FOUND: " + solution.firstBadVersion(n));
        ex.stop();
    }
}
