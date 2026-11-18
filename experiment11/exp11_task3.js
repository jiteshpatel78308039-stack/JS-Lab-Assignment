// Name: Jitesh Patel | Roll: 2510303242 | Experiment 11 | Task 3
function createAccount(balance) {
  return {
    deposit(amt) { balance += amt; return balance; },
    withdraw(amt) {
      if (amt > balance) return "Insufficient balance";
      balance -= amt;
      return balance;
    },
    getBalance() { return balance; }
  };
}
const acc = createAccount(1000);
console.log(acc.deposit(500));
console.log(acc.withdraw(200));
console.log(acc.withdraw(5000));
console.log(acc.balance);
console.log(acc.getBalance());
console.log(hoisted);
var hoisted = "I am hoisted";
