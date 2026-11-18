// Name: Jitesh Patel | Roll: 2510303242 | Experiment 5 | Task 2
const nums = [5, 12, 8, 130, 44];
console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n > 10));
console.log([...nums].sort((a, b) => a - b));
console.log(nums.indexOf(8), nums.includes(44));
console.log(nums.slice(1, 3));
nums.splice(1, 2);
console.log(nums);
console.log(nums.join(" - "));
