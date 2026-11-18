// Name: Jitesh Patel | Roll: 2510303242 | Experiment 12 | Task 1
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}
function bye() {
  console.log("Goodbye!");
}
greet("Jitesh", bye);
greet("Aman", function () { console.log("See you soon"); });
