/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

/**
 * 
 * @param {{
 * 	id: number,
 * 	timestamp: number,
 * 	price: number,
 * 	category: string,
 * 	itemName: string,
 * }[]} transactions 
 * @returns 
 */
function calculateTotalSpentByCategory(transactions) {
  const map = new Map()
  transactions.forEach(tr => {
    if (map.has(tr.category)) {
      map.set(tr.category, map.get(tr.category) + tr.price)
    } else map.set(tr.category, tr.price)
  })
  const arr = []
  map.forEach((v, k) => {
    arr.push({ category: k, totalSpent: v })
  })
  return arr;
}

module.exports = calculateTotalSpentByCategory;
