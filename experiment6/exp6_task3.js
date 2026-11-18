// Name: Jitesh Patel | Roll: 2510303242 | Experiment 6 | Task 3
const students = [
  { id: 1, name: "Aman", marks: 82 },
  { id: 2, name: "Neha", marks: 91 }
];
console.log(JSON.stringify(students, null, 2));
const back = JSON.parse(JSON.stringify(students));
console.log(back[1].name, back[1].marks);
try {
  JSON.parse("{name: 'Aman'}");
} catch (err) {
  console.log("Invalid JSON:", err.name);
}
