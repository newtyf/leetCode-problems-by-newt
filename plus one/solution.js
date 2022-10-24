/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let number = BigInt(digits.join(""));
  number += BigInt(1);
  const numberToArray = Array.from(String(number), Number);
  return numberToArray;
};

module.exports = { plusOne };
