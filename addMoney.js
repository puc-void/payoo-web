
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

        // 1. history container ke dhore niye asbe
        const history = document.getElementById("history-container");

        //2. new div create korbo

        const newHistory = document.createElement("div");

        //3. new div inner html a add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        
        Money added successfully! from ${bankAccount} at ${new Date().toLocaleTimeString()}
            
        </div>
        `;

        //4. history te append korbo
        history.append(newHistory);

    }
    else {
        alert("Invalid PIN");
    }


});
