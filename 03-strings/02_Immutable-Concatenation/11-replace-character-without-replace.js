// Problem :- Replace every occurrence of 'a' with 'x' without using replace().

const str = "Javascript";

let replacedStr = "";

for(let ch of str) {
    if(ch === 'a') {
        replacedStr += 'x';
    } else {
        replacedStr += ch
    }
};

for(let ch of str) {
    replacedStr += (ch === 'a') ? 'x' : ch;
};

console.log(replacedStr);
