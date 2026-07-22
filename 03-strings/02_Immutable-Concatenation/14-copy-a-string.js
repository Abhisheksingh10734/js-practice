// Problem : Create a copy of a string.

const str = "Javascript";

let strCopy = "";

for(let ch of str) {
    strCopy += ch;
}

// OR

let strCopy2 = str;

console.log(strCopy2);