// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

const maxArea = (h: number[]): number => {
  let max = 0;

  // O(N^2) SOLUTION
  // for (let i = 0; i < h.length; i++) {
  //     for (let j = 0; j < h.length; j++) {
  //         if (i === j) continue;
  //         const temp = Math.min(h[i], h[j]) * Math.abs(i - j)
  //         if (temp > max) max = temp;
  //     }
  // }

  // O(N^2) SOLUTION, SLIGHTLY BETTER
  // for (let i = 0; i < h.length; i++) {
  //     for (let j = i + 1; j < h.length; j++) {
  //         if (i === j) continue;
  //         const temp = Math.min(h[i], h[j]) * (j - i)
  //         if (temp > max) max = temp;
  //     }
  // }

  // O(N) SOLUTION
  let i = 0,
    j = h.length - 1;

  while (i < j) {
    const temp = Math.min(h[i], h[j]) * (j - i);
    if (temp > max) max = temp;

    if (h[i] > h[j]) j--;
    else i++;
  }

  return max;
};
