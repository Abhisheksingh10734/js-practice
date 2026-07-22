// Problem :- Extract the username from an email. [before @]

const email = 'john@gmail.com';

const partitionIndex = email.indexOf("@");

const username = email.slice(0, partitionIndex);

console.log(username);

// using loop

let newUsername = "";

for(let ch of email) {
    if(ch === '@') break;

    newUsername += ch;
};

console.log(newUsername);