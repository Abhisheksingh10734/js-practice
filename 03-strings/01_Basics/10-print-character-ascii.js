// Problem :- Print ASCII (Unicode) value of every character.

const str = "Javascript";

// using for of loop
for(let ch of str) {
    console.log(`ASCII value of ${ch} is ${ch.charCodeAt()}`);
}

// using for loop
for(let i = 0; i < str.length; i++) {
    console.log(`ASCII value of ${str[i]} is ${str[i].charCodeAt()}`);
}