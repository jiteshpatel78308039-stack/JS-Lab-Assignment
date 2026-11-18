// Name: Jitesh Patel | Roll: 2510303242 | Experiment 7 | Task 3
class Circle {
  constructor(r) { this._r = r; }
  get area() { return (Math.PI * this._r ** 2).toFixed(2); }
  set radius(v) {
    if (v > 0) this._r = v;
    else console.log("Radius must be positive");
  }
  static info() { return "Circle class"; }
}
const c = new Circle(3);
console.log(c.area);
c.radius = 5;
console.log(c.area);
c.radius = -2;
console.log(Circle.info());
