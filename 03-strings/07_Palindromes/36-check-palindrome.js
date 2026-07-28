// Problem :- Check whether a string is a palindrome.

const str = "madam";

let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if (str === reversedStr) {
    console.log(true);
} else {
    console.log(false);
}