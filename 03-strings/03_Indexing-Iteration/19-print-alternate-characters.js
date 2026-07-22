// Problem :- Print every alternate character.

let str = "Hello";

let index = 0;

for(let ch of str) {
    if(index % 2 === 0) {
        console.log(ch);        
    }

    index++;
}