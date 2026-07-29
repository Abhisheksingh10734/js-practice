// Problem :- Palindrome ignoring spaces.

// Using replaceAll()

const str = "n u r s e s r u n";

const cleanedStr = str.replaceAll(" ", "");

let reversedStr = "";

for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
}

console.log(cleanedStr === reversedStr);

// without replaceAll()

const str = "n u r s e s r u n";

let cleanedStr = "";

for (let ch of str) {
    if (ch !== " ") {
        cleanedStr += ch;
    }
}

let reversedStr = "";

for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
}

console.log(cleanedStr === reversedStr);