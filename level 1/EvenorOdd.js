const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    const number = Number(input);

    if (input.trim() === "" || !Number.isFinite(number)) {
        console.log("Invalid input");
    } else if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }

    rl.close();
});