// Name: Jitesh Patel | Roll: 2510303242 | Experiment 14 | Task 3
const t = setTimeout(() => console.log("This will never print"), 1000);
clearTimeout(t);
setTimeout(() => console.log("3. timeout with 0 ms"), 0);
Promise.resolve().then(() => console.log("2. promise"));
console.log("1. synchronous code");
