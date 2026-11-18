// Name: Jitesh Patel | Roll: 2510303242 | Experiment 12 | Task 3
function repeat(n, action) {
  for (let i = 1; i <= n; i++) action(i);
}
function multiplier(factor) {
  return (num) => num * factor;
}
function applyOp(a, b, op) { return op(a, b); }
repeat(3, (i) => console.log("Run number", i));
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(8), triple(8));
console.log(applyOp(6, 3, (x, y) => x * y));
