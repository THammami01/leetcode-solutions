// https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

class RecentCounter {
  requests: number[];

  constructor() {
    this.requests = [];
  }

  ping(t: number): number {
    this.requests.push(t);

    const lowerRangeBoundary = t - 3000;
    let requestCount = 0;

    for (const val of this.requests) {
      if (val < lowerRangeBoundary) break;
      requestCount++;
    }

    return requestCount;
  }
}

const recentCounter = new RecentCounter();

console.log(recentCounter.ping(1));
// requests = [1], range is [-2999, 1], return 1

console.log(recentCounter.ping(100));
// requests = [1, 100], range is [-2900, 100], return 2

console.log(recentCounter.ping(3001));
// requests = [1, 100, 3001], range is [1, 3001], return 3

console.log(recentCounter.ping(3002));
// requests = [1, 100, 3001, 3002], range is [2, 3002], return 3
