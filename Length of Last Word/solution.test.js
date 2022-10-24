const {lengthOfLastWord} = require("./solution")

test("return the length of the last word in the string",() => {
  let input = "Hello World"
  expect(lengthOfLastWord(input)).toBe(5)
})

test("return the length of the last word in the string",() => {
  let input = "   fly me   to   the moon  "
  expect(lengthOfLastWord(input)).toBe(4)
})

test("return the length of the last word in the string",() => {
  let input = "luffy is still joyboy"
  expect(lengthOfLastWord(input)).toBe(6)
})