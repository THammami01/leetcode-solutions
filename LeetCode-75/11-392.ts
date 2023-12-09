// https://leetcode.com/problems/is-subsequence/?source=submission-noac

const isSubsequence = (s: string, t: string): boolean => {
  for (let i = 0, tStartIdx = 0; i < s.length; i++) {
    const prevTStartIdx = tStartIdx;
    tStartIdx = t.substring(tStartIdx).indexOf(s[i]);
    if (tStartIdx === -1) return false;
    tStartIdx += prevTStartIdx + 1;
  }

  return true;
};
