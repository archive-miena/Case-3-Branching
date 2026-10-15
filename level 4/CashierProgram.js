const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter total purchase (Rp): ", function(input1) {
    rl.question("Are you a member? (yes/no): ", function(input2) {
        rl.question("Enter payment amount (Rp): ", function(input3) {
            let total = Number(input1);
            let member = input2.trim().toLowerCase();
            let payment = Number(input3);

            if (
                input1.trim() === "" ||
                input3.trim() === "" ||
                !Number.isFinite(total) ||
                !Number.isFinite(payment) ||
                total < 0 ||
                payment < 0 ||
                !["yes", "no"].includes(member)
            ) {
                console.log("Invalid input");
            } else {
                let discount = 0;

                if (member === "yes") {
                    discount = total * 0.10;
                }

                let finalTotal = total - discount;

                console.log("Discount: Rp" + discount.toLocaleString("id-ID"));
                console.log("Total payment: Rp" + finalTotal.toLocaleString("id-ID"));

                if (payment >= finalTotal) {
                    let change = payment - finalTotal;
                    console.log("Change: Rp" + change.toLocaleString("id-ID"));
                } else {
                    let shortage = finalTotal - payment;
                    console.log("Insufficient payment");
                    console.log("Shortage: Rp" + shortage.toLocaleString("id-ID"));
                }
            }

            rl.close();
        });
    });
});