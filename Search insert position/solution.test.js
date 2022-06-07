const {searchIndex} = require('./solution');

test('return the position of the array where the number is 5', () => {
  let input = [1,3,5,6]
  expect(searchIndex(input, 5)).toBe(2)
})

test('return the position of the array sorted if the number 2 exist', () => {
  let input = [1,3,5,6]
  expect(searchIndex(input, 2)).toBe(1)
})

test('return the position of the array sorted if the number 7 exist', () => {
  let input = [1,3,5,6]
  expect(searchIndex(input, 7)).toBe(4)
})