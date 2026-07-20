// Problem :- Find the length of a string without using .length directly inside the loop.

const str = "Javascript";

let strLen = 0;

// Using while loop
while(str[strLen] !== undefined) {
    strLen++;
}

// using for of loop
for(const len of str) {
    strLen++;
}