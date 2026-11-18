// Name: Jitesh Patel | Roll: 2510303242 | Experiment 5 | Task 3
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]);
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}
let sum = 0;
for (const row of matrix) {
  for (const val of row) sum += val;
}
console.log("Sum of all =", sum);
