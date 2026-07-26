// Problem :- Reverse word order.

const str = "hello world javascript";

let splittedStr = str.split(" ");

let newStr = "";

for (let i = splittedStr.length - 1; i >= 0; i--) {
    newStr += splittedStr[i];

    if (i !== 0) {
        newStr += " ";
    }
}

console.log(newStr);