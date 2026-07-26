// Problem :- Check whether a string is the reverse of another.

const str = "Hello";
const str2 = "olleH";

let isReverse = false;

let reversedStr = "";

if (str.length !== str2.length) {
    console.log(isReverse);
} else {
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    if (reversedStr === str2) {
        isReverse = true;
    }

    console.log(isReverse);
}