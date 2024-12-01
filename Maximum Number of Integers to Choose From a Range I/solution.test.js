const maxCount = require("./solution");

describe('Maximum Number of Integers to Choose From a Range I', () => {
  test('choosen integer length should be 2', () => {

    const banned = [1,6,5]
    const n = 5
    const maxSum = 6

    expect(maxCount(banned, n, maxSum)).toBe(2)
  });

  test('choosen integer length should be 0', () => {

    const banned = [1,2,3,4,5,6,7]
    const n = 8
    const maxSum = 1

    expect(maxCount(banned, n, maxSum)).toBe(0)
  });

  test('choosen integer length should be 7', () => {

    const banned = [11]
    const n = 7
    const maxSum = 50

    expect(maxCount(banned, n, maxSum)).toBe(7)
  });
});