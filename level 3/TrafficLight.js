const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter traffic light color: ", function(input) {
    let color = input.trim().toLowerCase();

    if (color === "red") {
        console.log("Stop");
    } else if (color === "yellow") {
        console.log("Get Ready");
    } else if (color === "green") {
        console.log("Go");
    } else {
        console.log("Invalid Color");
    }

    rl.close();
});