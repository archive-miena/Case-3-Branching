const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", function(input1) {
    rl.question("Masukkan angka kedua: ", function(input2) {
        let a = Number(input1);
        let b = Number(input2);

        if (input1.trim() === "" || input2.trim() === "" ||
            !Number.isFinite(a) || !Number.isFinite(b)) {
            console.log("Input tidak valid");
        } else if (a > b) {
            console.log(a + " is larger");
        } else if (b > a) {
            console.log(b + " is larger");
        } else {
            console.log("Both numbers are equal");
        }

        rl.close();
    });
});