// Name: Jitesh Patel | Roll: 2510303242 | Experiment 7 | Task 2
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate(by) {
    this.speed += by;
    return this.brand + " speed is now " + this.speed;
  }
}
const car = new Car("Tata", 40);
console.log(car.accelerate(20));
console.log(car);
