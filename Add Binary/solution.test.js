const {addBinary} = require("./solution")

test("sum of two numbers as binary strings", () => {
  let binaryA = "11"
  let binaryB = "1"
  expect(addBinary(binaryA, binaryB)).toBe("100")
})

test("sum of two numbers as binary strings", () => {
  let binaryA = "1010"
  let binaryB = "1011"
  expect(addBinary(binaryA, binaryB)).toBe("10101")
})

test("sum of two numbers as binary strings", () => {
  let binaryA = "1"
  let binaryB = "1"
  expect(addBinary(binaryA, binaryB)).toBe("10")
})

test("sum of two numbers as binary strings", () => {
  let binaryA = "0"
  let binaryB = "0"
  expect(addBinary(binaryA, binaryB)).toBe("0")
})

test("sum of two numbers as binary strings", () => {
  let binaryA = "0"
  let binaryB = "1"
  expect(addBinary(binaryA, binaryB)).toBe("1")
})

test("sum of two numbers as binary strings", () => {
  let binaryA = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
  let binaryB = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  expect(addBinary(binaryA, binaryB)).toBe("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")
})