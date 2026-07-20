// Problem :- Count how many vowels are present.

const str = 'Javascript';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const setVowels = new Set(['a', 'e', 'i', 'o', 'u']);

let totalVowels = 0;
 
// using for of loop
for(let ch of str) {
    if(vowels.includes(ch)) {
        totalVowels++;
    }
};

// using for loop
for(let i = 0; i < str.length; i++) {
    let currentChar = str[i].toLocaleLowerCase();
    if(currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
        totalVowels++;
    }
};

// using for of with set
for(let ch of str) {
    let currentChar = ch.toLocaleLowerCase();
    if(setVowels.has(currentChar)) {
        totalVowels++
    }
};

console.log(totalVowels);
