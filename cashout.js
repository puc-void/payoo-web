document.getElementById("cashout-btn").addEventListener("click", function () {

    //get agent number and validate
    //get the amount and validate number
    //get current balance
    //calculate new balance
    //get pin and verify
    //5-1 true , alert success and show new balance
    //5-2 false, alert failed and return
    const agentNumberInput = document.getElementById("agent-number");
    const agentNumber = agentNumberInput.value;
    console.log(agentNumber);

    const amountInput = document.getElementById("cashout-amount");
    const amount = amountInput.value;
    console.log(amount);
    const cashoutPinInput = document.getElementById("cashout-pin");
    const cashoutPin = cashoutPinInput.value;
    console.log(cashoutPin);

    const balanceElement = document.getElementById("balance");
    const balance = parseFloat(balanceElement.innerText);
    console.log(balance);

    const newBalance = Number(balance) - Number(amount);
    console.log(newBalance);
    if (newBalance >= 0 && cashoutPin === "1234" && agentNumber.length === 11) {
        balanceElement.innerText = newBalance;
        alert("Cashout successful!");
    } else {
        alert("Cashout failed!");
    }

});