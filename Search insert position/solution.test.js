const {searchIndex} = require('./solution');

test('return the position of the array where stay the number 2', () => {
  let input = [1,2,3,4,5]
  expect(searchIndex(input, 2)).toBe(1)
})

test('return the position of the number in the array if add this number in the array and then the array is sorted', () => {
  let input = [1,2,3,4,5]
  expect(searchIndex(input, 6)).toBe(5)
})