// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

const uniqueOccurrences = (arr) => {
  const occurenceCountPerNb = new Map();

  for (const val of arr) {
    if (!occurenceCountPerNb.has(val)) occurenceCountPerNb.set(val, 1);
    else occurenceCountPerNb.set(val, occurenceCountPerNb.get(val) + 1);
  }

  const occurenceCountArr = Array.from(occurenceCountPerNb.values());

  return new Set(occurenceCountArr).size === occurenceCountArr.length;
};
