/**
 * @newtyf
 * @param {number[]} banned
 * define the list of numbers that could not be elegible
 * @param {number} n
 * range [1...n] , define the elements oa length of the array iterable
 * @param {number} maxSum
 * define the max sum of the chosen integers
 * @return {number}
 * the length of the choosen integers
 */
const maxCount = (banned, n, maxSum) => {
  let chossedIntegers = [];
  let chossedIntegerSum = 0;

  for (let i = 1; i <= n; i++) {
    if (banned.some((bannedElement) => bannedElement === i)) continue;
    if (chossedIntegerSum + i <= maxSum) {
      chossedIntegers.push(i);
      chossedIntegerSum += i;
    } else {
      break;
    }
  }

  return chossedIntegers.length;
};

module.exports = maxCount;
