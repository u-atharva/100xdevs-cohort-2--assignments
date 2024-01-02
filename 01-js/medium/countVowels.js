/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

/**
 * 
 * @param {string} str 
 */
function countVowels(str) {
  const lowerCaseStr = str.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  for (let index = 0; index < lowerCaseStr.length; index++) {
    if (vowels.includes(lowerCaseStr[index])) {
      count = count + 1;
    }
  }
  return count;
}

module.exports = countVowels;