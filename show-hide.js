const addMoneySection = document.getElementById("add-money");
const cashoutSection = document.getElementById("cashout");

document.getElementById("show-add-money").addEventListener("click", function () {
    addMoneySection.classList.remove("hidden");
    cashoutSection.classList.add("hidden");
});

document.getElementById("show-cashout").addEventListener("click", function () {
    cashoutSection.classList.remove("hidden");
    addMoneySection.classList.add("hidden");
});