// Name: Jitesh Patel | Roll: 2510303242 | Experiment 10 | Task 1
const person = { name: "Jitesh", age: 20, city: "Bareilly" };
console.log(person.name, person["age"]);
person.course = "B.Tech";
delete person.city;
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
