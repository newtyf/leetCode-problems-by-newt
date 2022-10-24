/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// big int interface change point floated numbers to integer with n notation
var addBinary = function (a, b) {
  let decimalA = BigInt(0);
  let decimalB = BigInt(0);
  let exp = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const element = a[i];

    if (element === "1") {
      decimalA += BigInt(2 ** exp);
    }
    exp++;
  }
  exp = 0;
  for (let i = b.length - 1; i >= 0; i--) {
    const element = b[i];

    if (element === "1") {
      decimalB += BigInt(2 ** exp);
    }
    exp++;
  }
  let reusltSum = BigInt(decimalA) + BigInt(decimalB);
  let binaryResult = "";
  if (reusltSum == 0) {
    binaryResult = "0";
  }
  if (reusltSum == 1) {
    binaryResult = "1";
  }
  while (reusltSum / BigInt(2) >= 1) {
    binaryResult += reusltSum % BigInt(2);
    if (reusltSum / BigInt(2) < 2) {
      binaryResult += reusltSum / BigInt(2);
    }
    reusltSum = reusltSum / BigInt(2);
  }
  return binaryResult.split("").reverse().join("");
};

module.exports = { addBinary };