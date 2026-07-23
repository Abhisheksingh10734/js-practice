// Problem :- Convert lowercase to uppercase without using toUpperCase().

let str = "hello World!123";

let upperStr = "";

for (let i = 0; i < str.length; i++) {

    let currentCharCode = str.charCodeAt(i);

    if (currentCharCode >= 97 && currentCharCode <= 122) {
        upperStr += String.fromCharCode(currentCharCode - 32);
    } else {
        upperStr += str[i];
    }
}

console.log(upperStr);