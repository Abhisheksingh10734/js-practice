// Problem :- Count lowercase letters.

const str = "HellO";

let totalLowerCount = 0;

for(let ch of str) {
    let currentCharLower = ch.toLocaleLowerCase();

    if(ch === currentCharLower) {
        totalLowerCount++
    }
};

console.log(totalLowerCount);