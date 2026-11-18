// Name: Jitesh Patel | Roll: 2510303242 | Experiment 7 | Task 1
function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}
Student.prototype.show = function () {
  console.log("Name: " + this.name + ", Roll: " + this.roll);
};
const s1 = new Student("Aman", 101);
const s2 = new Student("Neha", 102);
s1.show();
s2.show();
console.log(s1 instanceof Student);
