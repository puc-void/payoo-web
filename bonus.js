document.getElementById("coupon-btn").addEventListener("click", function () {



    const couponCode = getValueFromInput("coupon-code");
    console.log(couponCode);
    if (couponCode === "") {
        alert("Please enter a coupon code");
        return;
    }
    
    if (couponCode === "PAY1234") {
        const currentBalance = getBalance();
        const newBalance = currentBalance + 10;
        setBalance(newBalance);
        alert(`Coupon applied successfully! at ${new Date().toLocaleTimeString()} & You got 10 Taka!`);
    }
    else {
        alert("Invalid coupon code");
    }


});