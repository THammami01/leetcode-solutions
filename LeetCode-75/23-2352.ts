// https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75

const equalPairs = (grid: number[][]): number => {
  if (!grid.length || !grid[0].length) return 0;

  const colsMap = new Map();

  for (let i = 0; i < grid.length; i++) {
    let colStr = "";
    for (const row of grid) colStr += row[i] + ",";
    colStr = colStr.substring(0, colStr.length - 1);

    colsMap.set(colStr, colsMap.has(colStr) ? colsMap.get(colStr) + 1 : 1);
  }

  let pairsCount = 0;

  for (let row of grid) {
    const rowStr = row.join(",");
    if (colsMap.has(rowStr)) pairsCount += colsMap.get(rowStr);
  }

  return pairsCount;
};
