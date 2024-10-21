const inputQueue = [23, 2, "^", 13, 9, "*", "-", 5, 7, "/", "+"];

console.log(RPNCalculate(inputQueue));

function RPNCalculate(inputQueue) {
  const stack = [];
  while (inputQueue.length > 0) {
    let val = inputQueue.shift();
    switch (typeof val) {
      case "number":
        stack.push(val);
        break;
      case "string":
        operation(val, stack);
        break;
      default:
        break;
    }
  }
  return stack[0];
}

function operation(operand, stack) {
  const b = stack.pop();
  const a = stack.pop();
  switch (operand) {
    case "+":
      stack.push(a + b);
      break;
    case "-":
      stack.push(a - b);
      break;
    case "*":
      stack.push(a * b);
      break;
    case "/":
      stack.push(a / b);
      break;
    case "^":
      stack.push(a ** b);
      break;
    default:
      break;
  }
}
