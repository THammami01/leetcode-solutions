// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

const productExceptSelf = (nums: number[]): number[] => {
  // O(N^2) SOLUTION
  // return nums.map((_el, outerIdx) =>
  //   nums.reduce((acc, val, idx) => (idx === outerIdx ? acc : acc * val), 1)
  // );

  // O(N) SOLUTION
  const prefixes = new Array(nums.length).fill(1);
  const postfixes = new Array(nums.length).fill(1);

  for (let i = 0, prefix = 1; i < nums.length; i++) {
    prefix *= nums[i];
    prefixes[i] = prefix;
  }

  for (let i = nums.length - 1, postfix = 1; i >= 0; i--) {
    postfix *= nums[i];
    postfixes[i] = postfix;
  }

  return nums.map((_el, i) => (prefixes[i - 1] ?? 1) * (postfixes[i + 1] ?? 1));
};
