// Problem :- Print characters at even indexes.

const str = "Javascript";

let index = 0;

for(let ch of str) {
    if(index % 2 === 0 ) {
        console.log(ch);
    }

    index++;
}