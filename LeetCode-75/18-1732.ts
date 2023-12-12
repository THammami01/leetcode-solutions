// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

const largestAltitude = (gain: number[]): number => {
  let highest = 0,
    sum = 0;

  // O(N) SOLUTION
  for (let val of gain) {
    sum += val;
    if (sum > highest) highest = sum;
  }

  return highest;
};
