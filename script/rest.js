document.getElementById('transfer-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const userAccountNumber = document.getElementById('user-account-number').value;
    const transferAmount = getValueById('transfer-amount');
    const pin = getValueById('transfer-pin');
    const mainBalance = getInnerTextById('main-balance');
    
    if(userAccountNumber.length === 11) {
        if(pin === 1234) {
            const newBalance = mainBalance - transferAmount;
            addNewInner_Text('main-balance', newBalance);

            const container = document.getElementById('history-container');
            const div = document.createElement('div');
            div.classList.add("flex", "justify-between", "items-center", "p-2", "bg-white", "rounded-xl");

            div.innerHTML = `
                <div class="flex gap-2">
                                <div class="rounded-[50%] p-2 bg-[#0808080D] flex justify-center items-center">
                                    <img src="./assets/money1.png" alt="">
                                </div>
                                <div>
                                    <h4 class="text-[#080808B3] font-semibold text-lg">Transfer Money</h4>
                                    <p class="text-[#080808B3]"> Transfered $${transferAmount } to ${userAccountNumber }</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>

            `
            container.appendChild(div);
            alert("Transfer Completed");
        }
        else {
            alert('invalid pin');
        }    
    }
    else {
        alert('enter valid account number');
    }
})

document.getElementById('bonus-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const coupon = document.getElementById('bonus-coupon').value;
    const mainBalance = getInnerTextById('main-balance');
    const bonus = 30;

    // console.log(typeof mainBalance, mainBalance);
    // console.log(typeof bonus, bonus);
    if(coupon === 'abcd30') {
        const newBalance = mainBalance + bonus;
        addNewInner_Text('main-balance', newBalance);

        const container = document.getElementById('history-container');
            const div = document.createElement('div');
            div.classList.add("flex", "justify-between", "items-center", "p-2", "bg-white", "rounded-xl");

            div.innerHTML = `
                <div class="flex gap-2">
                                <div class="rounded-[50%] p-2 bg-[#0808080D] flex justify-center items-center">
                                    <img src="./assets/bonus1.png" alt="">
                                </div>
                                <div>
                                    <h4 class="text-[#080808B3] font-semibold text-lg">Bonus Added</h4>
                                    <p class="text-[#080808B3]"> bonus $${bonus } adeed.</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>

            `
            container.appendChild(div);

        alert('bonus $30 adeed');
    }
    else {
        alert('invalid coupon code');
    }
})

document.getElementById('pay-bill-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const accNumber = getValueById('biller-account-number');
    const addAmount = getValueById('add-amount-to-pay');
    const pin = getValueById('pay-bill-pin');
    const mainBalance = getInnerTextById('main-balance');

    const accLength = document.getElementById('biller-account-number').value;

    const bankName = document.getElementById('bank-select').value;
   
    if(accLength.length === 11) {
        if(pin === 1234) {
            const newBalance = mainBalance - addAmount;
            addNewInner_Text('main-balance', newBalance);

            const container = document.getElementById('history-container');
            const div = document.createElement('div');
            div.classList.add("flex", "justify-between", "items-center", "p-2", "bg-white", "rounded-xl");

            div.innerHTML = `
                <div class="flex gap-2">
                                <div class="rounded-[50%] p-2 bg-[#0808080D] flex justify-center items-center">
                                    <img src="./assets/purse1.png" alt="">
                                </div>
                                <div>
                                    <h4 class="text-[#080808B3] font-semibold text-lg">Bill Paid</h4>
                                    <p class="text-[#080808B3]"> Bill $${addAmount} paid via ${bankName} BA (${accLength})</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>

            `
            container.appendChild(div);
            alert('Bill paid');
        }
        else {
            alert('enter valid pin');
        }
    }
    else {
        alert('enter valid account numher');
    }
})


