// Problem :- Count special characters.

const str = 'Hello@123!#$%';

let specialCharCount = 0;

const specialChars = new Set([
  "!", "@", "#", "$", "%", "^", "&", "*",
  "(", ")", "-", "_", "+", "=",
  "?", ".", ",", ":", ";",
  "'", "\"", "/", "\\"
]);

for(let ch of str) {

    if(specialChars.has(ch)) {
        specialCharCount++
    }
};

console.log(specialCharCount);
