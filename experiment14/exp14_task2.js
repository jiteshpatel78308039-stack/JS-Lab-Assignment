// Name: Jitesh Patel | Roll: 2510303242 | Experiment 14 | Task 2
let count = 5;
const timer = setInterval(() => {
  console.log("Countdown:", count);
  count--;
  if (count === 0) {
    clearInterval(timer);
    console.log("Time up!");
  }
}, 1000);
