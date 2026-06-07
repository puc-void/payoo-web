document.getElementById("login-btn").addEventListener("click", function () {
    const contactNumber = document.getElementById("input-number").value.trim();
    const pinNumber = document.getElementById("input-pin").value.trim();

    console.log("Number:", contactNumber);
    console.log("PIN:", pinNumber);

    if (contactNumber === "01891632464" && pinNumber === "2468") {
        console.log("Redirecting...");
        window.location.href = "home.html";
    } else {
        alert("Login Failed");
    }
});