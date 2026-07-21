// Problem :- Insert a character after every character.

const str = 'Javascript';

const insertChar = '-';

let newStr = "";

for (let ch of str) {
    newStr += ch;
    newStr += insertChar;
}

// This method does not add value after the end of the str
let currentIndex = 0;

for (let ch of str) {
    newStr += ch;

    if(currentIndex < str.length-1) {
        newStr += '-'
    }

    currentIndex++;
}

console.log(newStr);
