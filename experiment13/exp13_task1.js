// Name: Jitesh Patel | Roll: 2510303242 | Experiment 13 | Task 1
const nums = [4, 9, 2, 7, 5];
const sum = nums.reduce((acc, n) => acc + n, 0);
const max = nums.reduce((m, n) => (n > m ? n : m), nums[0]);
console.log("Sum =", sum);
console.log("Max =", max);
console.log("Average =", sum / nums.length);
