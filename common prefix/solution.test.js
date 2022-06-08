const {longestCommonPrefix} = require('./solution')

test('return fl because is the common prefix in the array', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
});

test('return empty string because the array havent common prefix', () => {
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
});