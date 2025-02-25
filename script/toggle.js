document.getElementById('pay-bill-section').style.display = 'none';
document.getElementById('get-bonus-section').style.display = 'none';
document.getElementById('tranasfer-money-section').style.display = 'none';
document.getElementById('cash-out-section').style.display = 'none';
document.getElementById('add-money-section').style.display = 'none';
document.getElementById("transaction-history-section").style.display = 'none';

document.getElementById('add-money').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('cash-out').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('transfer-money').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('get-bonus').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'block';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('pay-bill').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'block';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('transaction').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'block';
    document.getElementById('latest-payment-section').style.display = 'none';
})

document.getElementById('home').addEventListener('click', function () {
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('get-bonus-section').style.display = 'none';
    document.getElementById('tranasfer-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById("transaction-history-section").style.display = 'none';
    document.getElementById('latest-payment-section').style.display = 'block';
})