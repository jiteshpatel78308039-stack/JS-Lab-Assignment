// Name: Jitesh | Roll: 2510303242 | Experiment 11 | Task 1
var g = "global";
function test() {
  var f = "function scope";
  if (true) {
    let b = "block scope";
    var v = "var ignores block";
    console.log(b);
  }
  console.log(f, v);
  console.log(typeof b);
}
test();
console.log(g);
console.log(typeof f);
