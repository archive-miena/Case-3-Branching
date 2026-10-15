const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter parking duration (hours): ", function(input) {
    let hours = Number(input);

    if (
        input.trim() === "" ||
        !Number.isInteger(hours) ||
        hours <= 0
    ) {
        console.log("Invalid parking duration");
    } else {
        let fee;

        if (hours === 1) {
            fee = 5000;
        } else {
            fee = 5000 + (hours - 1) * 3000;
        }

        if (fee > 20000) {
            fee = 20000;
        }

        console.log("Parking fee: Rp" + fee.toLocaleString("id-ID"));
    }

    rl.close();
});