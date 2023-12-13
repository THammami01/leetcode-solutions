// https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75

const asteroidCollision = (asteroids: number[]): number[] => {
  if (asteroids.length < 2) return asteroids;

  const survivingAsteroids = [asteroids[0]];
  let i = 1;

  while (i < asteroids.length) {
    const prev = survivingAsteroids[survivingAsteroids.length - 1];
    const curr = asteroids[i];

    if (prev >= 0 && curr < 0) {
      const currAbsVal = Math.abs(curr);

      if (prev < currAbsVal) {
        survivingAsteroids.pop();
        continue;
      }

      if (prev === currAbsVal) survivingAsteroids.pop();
    } else survivingAsteroids.push(curr);

    i++;
  }

  return survivingAsteroids;
};
