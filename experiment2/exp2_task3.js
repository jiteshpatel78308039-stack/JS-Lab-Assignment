// Name: Jitesh Patel | Roll: 2510303242 | Experiment 2 | Task 3
function calculate(a, op, b) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) return "Cannot divide by zero";
      return a / b;
    case "%": return a % b;
    default: return "Invalid operator";
  }
}
console.log("12 + 8 =", calculate(12, "+", 8));
console.log("12 - 8 =", calculate(12, "-", 8));
console.log("12 * 8 =", calculate(12, "*", 8));
console.log("12 / 8 =", calculate(12, "/", 8));
console.log("12 / 0 =", calculate(12, "/", 0));
console.log("12 ^ 8 =", calculate(12, "^", 8));
