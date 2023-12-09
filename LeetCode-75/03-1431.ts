// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const biggestCandiesCountOwned = candies.reduce(
    (acc, val) => (val > acc ? val : acc),
    0
  );

  return candies.map((el) => el + extraCandies >= biggestCandiesCountOwned);
};
