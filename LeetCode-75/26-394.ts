// https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75

const decodeString = (str: string): string => {
  // ===/ CASE OF: ""
  if (!str) return "";

  const openingBracketIdx = str.indexOf("[");

  // ===/ CASE OF: "ef"
  if (openingBracketIdx === -1) return str;

  const firstDigitIdx = RegExp(/\d/).exec(str)?.index ?? -1;

  const count = +str.substr(0, openingBracketIdx);

  // ===/ CASE OF: "ef3[a]..."
  if (isNaN(count)) {
    const currStr = str.substr(0, firstDigitIdx);
    const remainingStr = str.substr(firstDigitIdx);
    return currStr + decodeString(remainingStr);
  }

  // ===/ CASE OF: "3[a]..."
  let closingBracketIdx = -1;

  for (
    let i = openingBracketIdx, closingBracketsToSkipCount = 0;
    i < str.length;
    i++
  ) {
    if (str[i] === "[") closingBracketsToSkipCount++;
    else if (str[i] === "]") {
      closingBracketsToSkipCount--;

      if (!closingBracketsToSkipCount) {
        closingBracketIdx = i;
        break;
      }
    }
  }

  const nestedStr = str.substring(openingBracketIdx + 1, closingBracketIdx);
  const remainingStr = str.substr(closingBracketIdx + 1);
  const decodedStr = decodeString(nestedStr);

  let resStr = "";
  for (let i = 0; i < count; i++) resStr += decodedStr;

  return resStr + decodeString(remainingStr);
};
