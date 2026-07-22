// Problem :- Extract the domain name. [ After @ ]

const email = "john@gmail.com";

let partitionIndex = email.indexOf("@");

let domain = email.slice(partitionIndex+1);

console.log(domain);

// using loop

let newDomain = "";

let foundAt = false;

for(let ch of email) {
    if(foundAt) {
        newDomain += ch;
    }

    if(ch === '@') {
        foundAt = true;
    };
}

console.log(newDomain);