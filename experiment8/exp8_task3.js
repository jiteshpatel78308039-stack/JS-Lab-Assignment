// Name: Jitesh Patel | Roll: 2510303242 | Experiment 8 | Task 3
const canFly = (obj) => ({
  fly: () => console.log(obj.name + " is flying")
});
const canSwim = (obj) => ({
  swim: () => console.log(obj.name + " is swimming")
});
function createDuck(name) {
  const duck = { name };
  return Object.assign(duck, canFly(duck), canSwim(duck));
}
class Engine { start() { return "Engine started"; } }
class Car {
  constructor() { this.engine = new Engine(); }
  drive() { console.log(this.engine.start() + ", car is moving"); }
}
const duck = createDuck("Donald");
duck.fly();
duck.swim();
new Car().drive();
