// Problem :- Count consonants

const str = "Javascript";

let totalConsonants = 0;

const setVowels = new Set(['a', 'e', 'i', 'o', 'u']);
const vowels = ['a', 'e', 'i', 'o', 'u'];

// using for of loop
for (let ch of str) {
    let currentChar = ch.toLocaleLowerCase();

    if (setVowels.has(currentChar)) {
        continue;
    } else {
        totalConsonants++
    }
};

// using for loop
for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLocaleLowerCase();

    if (vowels.includes(currentChar)) {
        continue;
    } else {
        totalConsonants++
    }
};

// without else
for (let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLocaleLowerCase();

    if (!vowels.includes(currentChar)) {
        totalConsonants++
    }
};

console.log(totalConsonants);
