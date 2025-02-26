document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = document.getElementById('add-amount').value;
    const pin = document.getElementById('pin').value;
    const mainBalance = document.getElementById('main-balance').innerText;

    const convertedAcc = parseInt(accountNumber);
    const convertedAmount = parseFloat(addAmount);
    const convertedPin = parseInt(pin);
    let convertedBalance = parseFloat(mainBalance).toFixed(2);

    if (convertedPin && convertedAmount && accountNumber.length) {
        if (convertedPin === 1234) {
            const newBalance = convertedAmount + convertedBalance;
            document.getElementById('main-balance').innerText = newBalance;
        }
        else if (convertedAmount <= 0) {
            alert('Enter Amount');
        }
        else {
        alert('Enter valid PIN')
    }
    }
    
})

document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = "./index.html";
})