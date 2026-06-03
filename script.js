document.getElementById("login-btn").addEventListener("click",function () {
            const numberInput= document.getElementById("input-number")
            const contactNumber= numberInput.value;
            console.log(contactNumber);


            const inputPin= document.getElementById("input-pin")
            const pinNumber= inputPin.value;
            console.log(pinNumber)
            

            if(contactNumber=="01891632464" && pinNumber=="2468"){
                alert("Login Success!")
                window.location.assign("/home.html")
            }
            else{
                alert("Login Failed")
                return;
            }
});