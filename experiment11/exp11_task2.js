// Name: Jitesh Patel | Roll: 2510303242 | Experiment 11 | Task 2
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1(), c1(), c1());
console.log(c2());
