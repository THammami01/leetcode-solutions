// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

const pivotIndex = (nums: number[]): number => {
  // O(N) SOLUTION, BUT UNACCEPTED; IT DOESN'T WORK PROPERLY WITH POSITIVE/NEGATIVE VALUES
  // let i = 0,
  //   j = nums.length - 1,
  //   leftSum = 0,
  //   rightSum = 0;

  // while (i < j) {
  //   const nextLeftSum = leftSum + nums[i];
  //   const nextRightSum = rightSum + nums[j];

  //   if (nextLeftSum > nextRightSum) {
  //     // if (Math.abs(nextLeftSum) > Math.abs(nextRightSum)) {
  //     rightSum = nextRightSum;
  //     j--;
  //   } else {
  //     leftSum = nextLeftSum;
  //     i++;
  //   }
  // }

  // return rightSum === leftSum ? i : -1;

  // O(N) SOLUTION
  let i = 1,
    leftSum = 0,
    rightSum = nums.reduce((acc, val) => acc + val, 0) - nums[0];

  while (i < nums.length && leftSum !== rightSum) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    i++;
  }

  return leftSum === rightSum ? i - 1 : -1;
};
