/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = intermediateArr(str1)
  const sorted2 = intermediateArr(str2)

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
}

function intermediateArr(str) {
  return str.toLowerCase().split('').sort()
}

module.exports = isAnagram;
