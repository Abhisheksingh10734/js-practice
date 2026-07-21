// Problem :- Count uppercase letters

const str = "JaVaScRiPt";

let totalUpperCharCount = 0;

for(let ch of str) {
    let currentCharUpper = ch.toUpperCase();

    if(ch === currentCharUpper) {
        totalUpperCharCount++;
    }
}

console.log(totalUpperCharCount);