document.getElementById("pay-bill-btn").addEventListener("click", function () {


    const biller = getValueFromInput("bill-biller");
    console.log(biller);
    if (biller === "Select Biller") {
        alert("Please select a biller");
        return;
    }

    const accountNumber = getValueFromInput("bill-number");
    console.log(accountNumber);
    if (accountNumber === "" && accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number");
        return;
    }

    const billAmount = getValueFromInput("bill-amount");
    console.log(billAmount);
    if (billAmount === "" || isNaN(billAmount) || Number(billAmount) <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    const pin = getValueFromInput("bill-pin");
    console.log(pin);
    if (pin === "" || pin.length !== 4) {
        alert("Please enter a valid 4-digit PIN");
        return;
    }

    if (pin === "1234") {
        const currentBalance = getBalance();
        if (Number(billAmount) > currentBalance) {
            alert("Insufficient balance");
            return;
        }
        const newBalance = currentBalance - Number(billAmount);
        setBalance(newBalance);
        alert(`Bill paid successfully to ${biller} at ${new Date().toLocaleTimeString()}`);
    }
    else {
        alert("Invalid PIN");
    }






});