const {plusOne} = require("./solution")

test("Increment the large integer by one and return the resulting array of digits", () => {
  let digits = [1,2,3]
  expect(plusOne(digits)).toEqual([1,2,4])
})

test("Increment the large integer by one and return the resulting array of digits", () => {
  let digits = [4,3,2,1]
  expect(plusOne(digits)).toEqual([4,3,2,2])
})

test("Increment the large integer by one and return the resulting array of digits", () => {
  let digits = [9]
  expect(plusOne(digits)).toEqual([1,0])
})

test("Increment the large integer by one and return the resulting array of digits", () => {
  let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
  expect(plusOne(digits)).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4])
})