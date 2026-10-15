const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1-7): ", function(input) {
    let day = Number(input);

    if (input.trim() === "" || !Number.isInteger(day) ||
        day < 1 || day > 7) {
        console.log("Invalid day");
    } else if (day === 1) {
        console.log("Monday");
    } else if (day === 2) {
        console.log("Tuesday");
    } else if (day === 3) {
        console.log("Wednesday");
    } else if (day === 4) {
        console.log("Thursday");
    } else if (day === 5) {
        console.log("Friday");
    } else if (day === 6) {
        console.log("Saturday");
    } else {
        console.log("Sunday");
    }

    rl.close();
});