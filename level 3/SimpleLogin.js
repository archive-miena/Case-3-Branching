const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter username: ", function(username) {
    rl.question("Enter password: ", function(password) {

        if (username === "admin" && password === "12345") {
            console.log("Login successful");
        } else if (username !== "admin") {
            console.log("Incorrect username");
        } else {
            console.log("Incorrect password");
        }

        rl.close();
    });
});