// Name: Jitesh Patel | Roll: 2510303242 | Experiment 8 | Task 1
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(this.name + " makes a sound"); }
}
class Dog extends Animal {
  fetch() { console.log(this.name + " fetches the ball"); }
}
const d = new Dog("Tommy");
d.speak();
d.fetch();
console.log(d instanceof Animal);
