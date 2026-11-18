// Name: Jitesh Patel | Roll: 2510303242 | Experiment 12 | Task 2
const marks = [35, 72, 48, 90, 61];
marks.forEach((m, i) => console.log("Student " + (i + 1) + ": " + m));
console.log(marks.map(m => m + 5));
console.log(marks.filter(m => m >= 50));
