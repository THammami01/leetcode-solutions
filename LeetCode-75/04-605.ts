// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let remaining = n,
    idx = 0;

  while (remaining && idx < flowerbed.length) {
    if (
      !flowerbed[idx] &&
      ((idx === 0 && !flowerbed[idx + 1]) ||
        (idx === flowerbed.length - 1 && !flowerbed[idx - 1]) ||
        (!flowerbed[idx - 1] && !flowerbed[idx + 1]))
    ) {
      flowerbed[idx] = 1;
      remaining--;
    }

    idx++;
  }

  return !remaining;
};
