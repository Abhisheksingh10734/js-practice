// Problem :- Extract everything after the first space.

let str = 'This Is Javascript';

let splittedStr = str.split(" ")

let index = 0;

let newStr = ""
for(let ch of splittedStr) {
    if(index > 0) {
        newStr += ch + " ";
    }

    index++;
}

console.log(newStr);

// using indexof and split

const spaceIndex = str.indexOf(" ");

const result = str.slice(spaceIndex + 1);

console.log(result);