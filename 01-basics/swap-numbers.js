// Problem: Swap two numbers without using a third variable

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // 10
console.log("b =", b); // 5
