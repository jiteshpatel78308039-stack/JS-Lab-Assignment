// Name: Jitesh Patel | Roll: 2510303242 | Experiment 10 | Task 2
const user = {
  id: 7, name: "Neha", address: { city: "Delhi", pin: 110001 }
};
const { id, name: userName, role = "student" } = user;
console.log(id, userName, role);
const { address: { city } } = user;
console.log(city);
function show({ name, id }) {
  console.log(name + " has id " + id);
}
show(user);
