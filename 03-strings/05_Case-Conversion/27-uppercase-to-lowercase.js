// Problem :- Convert uppercase to lowercase without using toLowerCase().

let str = "HelLo World!123";

let lowerStr = "";

for (let i = 0; i < str.length; i++) {

    let currentCharCode = str.charCodeAt(i);

    if (currentCharCode >= 65 && currentCharCode <= 96) {
        lowerStr += String.fromCharCode(currentCharCode + 32);
    } else {
        lowerStr += str[i];
    }
}

console.log(lowerStr);