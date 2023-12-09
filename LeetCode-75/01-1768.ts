// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

const isStrValid = (str: string, substrLen: number): boolean => {
  const substrToCheck = str.substring(0, substrLen);
  return !str.split(substrToCheck).filter((val) => !!val).length;
};

const gcdOfStrings = (str1: string, str2: string): string => {
  const maxStrLen = str1.length < str2.length ? str1.length : str2.length;
  let substrLen = maxStrLen;

  while (substrLen > 0) {
    if (
      isStrValid(str1, substrLen) &&
      isStrValid(str2, substrLen) &&
      str1.startsWith(str2.substring(0, substrLen))
    )
      return str1.substring(0, substrLen);

    substrLen--;
  }

  return "";
};
