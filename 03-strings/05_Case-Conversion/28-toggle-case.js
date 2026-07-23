// Problem :- Toggle every character's case.

const str = "Hello World!123";

let toggledStr = "";

for(let i = 0; i < str.length; i++) {

    let currentCharCode = str.charCodeAt(i);

    if(currentCharCode >= 65 && currentCharCode <= 90) {
        toggledStr += String.fromCharCode(currentCharCode + 32);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
        toggledStr += String.fromCharCode(currentCharCode - 32);
    } else {
        toggledStr += str[i]
    };
}

console.log(toggledStr);