// Name: Jitesh Patel | Roll: 2510303242 | Experiment 15 | Task 1
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("Access granted");
    else reject("Access denied");
  });
}
checkAge(20)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))
  .finally(() => console.log("Check 1 done"));
checkAge(15)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))
  .finally(() => console.log("Check 2 done"));
