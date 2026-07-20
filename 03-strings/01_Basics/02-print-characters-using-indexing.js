// Problem. Print characters using indexing only (without for...of).

const str = "Hello"; // 5 -> 0-4 -> 5 - 1 = 4

// start = 0
// end = 4

// for loop

for(let i = 0; i <= str.length-1; i++) {
    console.log(`character at ${i} index is ${str[i]}`);

    // i = 0 -> str[0] -> H
    //  i = 1 -> str[1] -> e
    // i = 2 -> str[2] -> e
    // i = 3 -> str[3] -> l
    // i = 4 -> str[4] -> o
}

// using for of loop