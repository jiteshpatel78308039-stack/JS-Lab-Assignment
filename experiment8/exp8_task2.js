// Name: Jitesh Patel | Roll: 2510303242 | Experiment 8 | Task 2
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  details() { return this.name + " earns " + this.salary; }
}
class Manager extends Employee {
  constructor(name, salary, team) {
    super(name, salary);
    this.team = team;
  }
  details() {
    return super.details() + " and manages " + this.team + " people";
  }
}
const m = new Manager("Ravi", 50000, 8);
console.log(m.details());
