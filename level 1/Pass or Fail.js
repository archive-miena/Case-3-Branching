const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter total purchase (Rp): ", function(input) {
    const total = Number(input);

    if (input.trim() === "" || !Number.isFinite(total) || total < 0) {
        console.log("Invalid purchase amount");
    } else {
        let discountRate;

        if (total >= 1000000) {
            discountRate = 0.20;
        } else if (total >= 500000) {
            discountRate = 0.10;
        } else if (total >= 250000) {
            discountRate = 0.05;
        } else {
            discountRate = 0;
        }

        const discount = total * discountRate;
        const finalPrice = total - discount;

        console.log("Discount: " + (discountRate * 100) + "%");
        console.log("Final price: Rp" + finalPrice.toLocaleString("id-ID"));
    }

    rl.close();
});