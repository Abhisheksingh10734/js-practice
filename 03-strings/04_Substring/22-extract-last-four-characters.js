// Problem :- Extract the last 4 characters.

const str = "Javascript";

console.log(str.slice(-4));

// using loop

for(let i = str.length-4; i < str.length; i++) {
    console.log(str[i]);    
}