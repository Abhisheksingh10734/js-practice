// Problem :- Find the length of a string without using .length directly inside the loop.

let str = 'Javascript';

let strLen = 0;

while (str[strLen] !== undefined) {
    strLen++
}

for (let ch of str) {
    strLen++
}

console.log(strLen);