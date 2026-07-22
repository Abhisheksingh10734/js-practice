// Problem :- Demonstrate why strings are immutable in JavaScript.

let str = "Javascript";

// ❌ Doesn't work
str[0] = "B";

console.log(str);

// ✅ Create a new string instead
str = "B" + str.slice(1);

console.log(str);