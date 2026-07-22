// Problem :- Print the first and last character.

let str = "Javascript";

const firstChar = str[0];
const lastChar = str[str.length-1];

console.log(firstChar);
console.log(lastChar);


// using loop
let index = 0;
let lastIndex = str.length-1;

for(let ch of str) {
    if(index === 0 || index === lastIndex) {
        console.log(ch);
    }

    index++;
}