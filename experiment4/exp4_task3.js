// Name: Jitesh Patel | Roll: 2510303242 | Experiment 4 | Task 3
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
function isEven(n) {
  return n % 2 === 0;
}
function total(...nums) {
  let s = 0;
  for (const x of nums) s += x;
  return s;
}
console.log("5! =", factorial(5));
console.log("10 even?", isEven(10));
console.log("7 even?", isEven(7));
console.log("Total =", total(10, 20, 30, 40));
