const {validBrackets} = require("./solution")

test('return true if the brackets close susccesfully or fals otherwise', () => {
  let input = "()"
  expect(validBrackets(input)).toBe(true);
})

test('return true if the brackets close susccesfully or fals otherwise', () => {
  let input = "()[]{}"
  expect(validBrackets(input)).toBe(true);
})

test('return true if the brackets close susccesfully or fals otherwise', () => {
  let input = "(]"
  expect(validBrackets(input)).toBe(false);
})