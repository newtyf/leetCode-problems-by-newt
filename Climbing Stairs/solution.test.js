const strStr = require("./solution");

describe('Find Index Leetcode problem', () => {
  test('should be index 0', () => {

    const haystack = "sadbutsad"
    const needle = "sad"

    expect(strStr(haystack, needle)).toBe(0)
  });

  test('should be index 3', () => {

    const haystack = "butsadbut"
    const needle = "sad"

    expect(strStr(haystack, needle)).toBe(3)
  });

  test('should be index -1', () => {

    const haystack = "leetcode"
    const needle = "leeto"

    expect(strStr(haystack, needle)).toBe(-1)
  });
});