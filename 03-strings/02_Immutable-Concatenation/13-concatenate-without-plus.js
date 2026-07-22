// Problem :- Concatenate two strings without using +.

let str1 = "Hello";
let str2  = "World!";

let combinedStr = "";

for(let ch of str1) {
    combinedStr += ch;
};

for(let ch of str2) {
    combinedStr += ch;
}

console.log(combinedStr);