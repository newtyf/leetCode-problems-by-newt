let input = "{}{[]}";

function validBrackets(input) {
  let stack = [];

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (element == "{" || element == "[" || element == "(") {
      stack.push(element);
    } else {
      if (stack.length == 0) {
        return false;
      }
      let topStack = stack[stack.length - 1];
      stack.pop();
      if (
        (element == ")" && topStack == "(") ||
        (element == "}" && topStack == "{") ||
        (element == "]" && topStack == "[")
      ) {
      } else {
        return false;
      }
    }
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
// this function returns true if the parentheses are successful or false otherwise

var result = validBrackets(input);

module.exports = { validBrackets };
