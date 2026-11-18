// Name: Jitesh Patel | Roll: 2510303242 | Experiment 10 | Task 3
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second, rest);
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);
const a = [1, 2], b = [3, 4];
console.log([...a, ...b]);
const base = { p: 1, q: 2 };
console.log({ ...base, q: 9, r: 3 });
