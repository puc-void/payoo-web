console.log("Machine is running...");

// machine-> id
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}


function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(Number(balance));
    return Number(balance);
}

function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}



// machine id -> hide section
function showSection(id) {
    const addMoney = document.getElementById("add-money");
    const cashOutMoney = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    const bonus = document.getElementById("bonus");
    addMoney.classList.add("hidden");
    cashOutMoney.classList.add("hidden");
    transferMoney.classList.add("hidden");
    bonus.classList.add("hidden");


    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}