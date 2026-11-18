// Name: Jitesh Patel | Roll: 2510303242 | Experiment 13 | Task 3
const cart = [
  { item: "Pen", price: 10, qty: 5 },
  { item: "Book", price: 120, qty: 2 },
  { item: "Bag", price: 450, qty: 1 }
];
const names = cart.map(c => c.item);
const totals = cart.map(c => c.price * c.qty);
const grand = totals.reduce((a, b) => a + b, 0);
console.log(names);
console.log(totals);
console.log("Grand total = Rs.", grand);
console.log("Any item above Rs.400?", cart.some(c => c.price > 400));
