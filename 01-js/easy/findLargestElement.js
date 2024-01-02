/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
/**
 * 
 * @param {number[]} numbers 
 */
function findLargestElement(numbers) {
    let l = numbers[0]
    for (let index = 1; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > l) l = element
    }
    return l
}

module.exports = findLargestElement;