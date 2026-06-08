document.getElementById("transfer-btn").addEventListener("click", function () {


    const recipientNumber = getValueFromInput("transfer-number");
    console.log(recipientNumber);
    if (recipientNumber === "" && recipientNumber.length !== 11) {
        alert("Please enter a valid 11-digit recipient number");
        return;
    }


    const transferAmount = getValueFromInput("transfer-amount");
    console.log(transferAmount);
    if (transferAmount === "" || isNaN(transferAmount) || Number(transferAmount) <= 0) {
        alert("Please enter a valid amount");
        return;
    }


    const pin = getValueFromInput("transfer-pin");
    console.log(pin);


    if (pin === "" || pin.length !== 4) {
        alert("Please enter a valid 4-digit PIN");
        return;
    }

    if (pin === "1234") {
        const currentBalance = getBalance();
        if (Number(transferAmount) > currentBalance) {
            alert("Insufficient balance");
            return;
        }
        const newBalance = currentBalance - Number(transferAmount);
        setBalance(newBalance);
        alert(`Money transferred successfully to ${recipientNumber} at ${new Date().toLocaleTimeString()}`);
    }
    else {
        alert("Invalid PIN");
    }

});
