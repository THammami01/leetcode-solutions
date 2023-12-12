// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75

type NumsObjType = {
  [key: number]: {
    pairedNb: number;
    count: number;
  };
};

const maxOperations = (nums: number[], k: number): number => {
  let pairs = 0;

  // O(N^2) SOLUTION
  // for (let i = 0; i < nums.length - 1; i++) {
  //     const target = k - nums[i];

  //     for (let j = i + 1; j < nums.length; j++)
  //         if (nums[j] === target) {
  //             pairs++;
  //             nums.splice(j, 1);
  //             nums.splice(i, 1);
  //             i--; // NOSONAR
  //             break;
  //         }
  // }

  // O(N) SOLUTION
  const numsObj: NumsObjType = {};

  for (const num of nums)
    if (numsObj[num]) numsObj[num].count++;
    else numsObj[num] = { pairedNb: k - num, count: 1 };

  for (const [, v] of Object.entries(numsObj)) {
    const firstPairCount = v.count;
    const secondPairCount = numsObj[v.pairedNb]?.count;

    if (firstPairCount && secondPairCount)
      pairs += Math.min(v.count, numsObj[v.pairedNb].count);
  }

  pairs = Math.floor(pairs / 2);
  // SIMILAR TO: pairs DIV 2
  // USED TO HANDLE THE CASE OF k % 2 === 0 && k % 2 !== 0

  return pairs;
};
