document.getElementById("add-money-btn").addEventListener("click", function () {
    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount);
    if (bankAccount === "Select Bank") {
        alert("Please select a bank");
        return;
    }

    const accountNumber = getValueFromInput("add-money-number");
    console.log(accountNumber);
    if (accountNumber === "" && accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number");
        return;
    }

    const addMoneyAmount = getValueFromInput("add-money-amount");
    console.log(addMoneyAmount);
    if (addMoneyAmount === "" || isNaN(addMoneyAmount) || Number(addMoneyAmount) <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    const pin = getValueFromInput("add-money-pin");
    console.log(pin);
    if (pin === "" || pin.length !== 4) {
        alert("Please enter a valid 4-digit PIN");
        return;
    }

    if (pin === "1234") {
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(addMoneyAmount);
        setBalance(newBalance);
        alert(`Money added successfully! from ${bankAccount} at ${new Date().toLocaleTimeString()}`);
    }
    else {
        alert("Invalid PIN");
    }


});
