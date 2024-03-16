// 1360. Number of Days Between Two Dates
// https://leetcode.com/problems/number-of-days-between-two-dates/description/

const daysBetweenDates = (date1: string, date2: string): number => {
  const timestamp1 = new Date(date1).getTime();
  const timestamp2 = new Date(date2).getTime();
  return Math.abs(timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
};
