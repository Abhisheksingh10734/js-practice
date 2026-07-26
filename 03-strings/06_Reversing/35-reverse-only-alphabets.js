// Problem :- Reverse only alphabets.

const str = "a1b2c3";

let alphabets = "";
let reversedStr = "";

// Step 1: Collect only alphabets
for (let ch of str) {
    let charCode = ch.charCodeAt(0);

    if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    ) {
        alphabets += ch;
    }
}

// Step 2: Put alphabets back in reverse order
let alphabetIndex = alphabets.length - 1;

for (let ch of str) {
    let charCode = ch.charCodeAt(0);

    if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    ) {
        reversedStr += alphabets[alphabetIndex];
        alphabetIndex--;
    } else {
        reversedStr += ch;
    }
}

console.log(reversedStr);