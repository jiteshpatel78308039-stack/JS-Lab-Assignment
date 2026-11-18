// Name: Jitesh Patel | Roll: 2510303242 | Experiment 15 | Task 3
const marksData = { Aman: 82, Neha: 91, Ravi: 67 };
const getMarks = (name) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(marksData[name]), 300);
  });
async function run() {
  const results = await Promise.all([
    getMarks("Aman"), getMarks("Neha"), getMarks("Ravi")
  ]);
  console.log(results);
  const total = results.reduce((a, b) => a + b, 0);
  console.log("Average =", (total / results.length).toFixed(2));
}
run();
