/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
  const lowerCaseStrArr = str.toLowerCase().split('').filter(v => v >= 'a' && v <= 'z')
  for (let index = 0; index < lowerCaseStrArr.length / 2; index++) {
    if (lowerCaseStrArr[index] !== lowerCaseStrArr[lowerCaseStrArr.length - 1 - index]) return false;
  }
  return true;
}

module.exports = isPalindrome;
