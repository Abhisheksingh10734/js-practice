// Problem :- Reverse each word individually.

const str = "Hello World";

let reversedStr = "";

let splittedStr = str.split(" ");

for (let i = 0; i < splittedStr.length; i++) {
    let currentWord = splittedStr[i];

    for (let j = currentWord.length - 1; j >= 0; j--) {
        reversedStr += currentWord[j];
    }

    if (i !== splittedStr.length - 1) {
        reversedStr += " ";
    }
}

console.log(reversedStr);