const FindTheWinner = require("./solution");

describe('Find Index Leetcode problem', () => {
  test('should be index 3', () => {

    const n = 5
    const k = 2

    expect(FindTheWinner(n, k)).toBe(3)
  });

  test('should be index 1', () => {

    const n = 6
    const k = 5

    expect(FindTheWinner(n, k)).toBe(1)
  });
});