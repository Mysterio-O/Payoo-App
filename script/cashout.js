document.getElementById('cash-out-btn').addEventListener('click', function () {
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const pin = document.getElementById('cashout-pin').value;
    const mainBalance = document.getElementById('main-balance').innerText;

    const convertedAgent = parseInt(agentNumber);
    const convertedWithdraw = parseFloat(withdrawAmount);
    const convertedPin = parseInt(pin);
    const convertedBalance = parseFloat(mainBalance);
    let remainingBalance = 0;
    const bankName = document.getElementById('bank-select').value;

    if (agentNumber.length !== 11) {
        alert('enter a valid agent number');
        return;
    }
    if (pin.length !== 4) {
        alert('enter valid pin');
        return;
    }
    if (convertedWithdraw > convertedBalance) {
        alert('insufficient balance');
        return;
    }
    if (agentNumber && convertedPin) {
        if (convertedPin === 1234) {
            remainingBalance = convertedBalance - convertedWithdraw;
            document.getElementById('main-balance').innerText = remainingBalance.toFixed(2);

            const container = document.getElementById('history-container');
            const div = document.createElement('div');
            div.classList.add("flex", "justify-between", "items-center", "p-2", "bg-white", "rounded-xl");

            div.innerHTML = `
                <div class="flex gap-2">
                                <div class="rounded-[50%] p-2 bg-[#0808080D] flex justify-center items-center">
                                    <img src="./assets/money1.png" alt="">
                                </div>
                                <div>
                                    <h4 class="text-[#080808B3] font-semibold text-lg">CashOut</h4>
                                    <p class="text-[#080808B3]"> Cashout $${convertedWithdraw } to ${agentNumber }</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>

            `
            container.appendChild(div);
            alert('CashOut Succesful');
        }
        else {
            alert('wrong pin');
        }
    }
})