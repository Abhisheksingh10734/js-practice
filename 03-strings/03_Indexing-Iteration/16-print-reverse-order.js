// Problem :- Print characters from last to first.

let str = "Javascript";

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// using for of loop

let reversedStr = "";

for(let ch of str) {
    reversedStr = ch + reversedStr;
}

console.log(reversedStr);
