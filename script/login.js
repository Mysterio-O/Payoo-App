document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('Account-number').value;
    const pin = document.getElementById('PIN').value;
    const pinConverted = parseInt(pin);
    if(accountNumber.length === 11) {
        if(pinConverted === 1234) {
            window.location.href = "./home.html";
        }
        else {
            alert("Wrong PIN");
        }
    }
    else {
        alert('Invalid Account Number or PIN');
    }
})
