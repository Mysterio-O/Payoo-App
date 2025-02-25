document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = document.getElementById('add-amount').value;
    const pin = document.getElementById('pin').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    
    const convertedAcc = parseInt(accountNumber);
    const convertedAmount = parseFloat(addAmount);
    const convertedPin = parseInt(pin);
    let convertedBalance = parseFloat(mainBalance);

    if(convertedPin === 1234 && convertedAmount > 0 && accountNumber .length === 11) {
        const newBalance = convertedAmount +  convertedBalance;
        document.getElementById('main-balance').innerText = newBalance;
    }
    else {
        alert('something went wrong');
    }
})

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = "./index.html";
})