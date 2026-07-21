// Problem :- Count digits inside a string.

const str = 'hello123';

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let digitsCount = 0;

for(let ch of str) {
    if(digits.includes(ch)) {
        digitsCount++
    }
}

console.log(digitsCount);
