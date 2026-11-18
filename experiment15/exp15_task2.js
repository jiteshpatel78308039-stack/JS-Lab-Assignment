// Name: Jitesh Patel | Roll: 2510303242 | Experiment 15 | Task 2
const students = [
  { id: 1, name: "Aman", marks: 82 },
  { id: 2, name: "Neha", marks: 91 }
];
function getStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const s = students.find(x => x.id === id);
      if (s) resolve(s);
      else reject(new Error("Student not found"));
    }, 500);
  });
}
async function main() {
  try {
    const a = await getStudent(1);
    console.log("Found:", a.name, a.marks);
    const b = await getStudent(5);
    console.log("Found:", b.name);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
main();
