// Problem :- Capitalize the first letter of every word.

let str = "hello javascript";

let splittedStr = str.split(" ");

let updatedStr = "";

for(let word of splittedStr) {
    updatedStr += word.slice(0, 1).toUpperCase() + word.slice(1) + " ";
}

console.log(updatedStr.trim());
