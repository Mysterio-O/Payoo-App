document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    //    console.log(typeof bankAccountNumber);
    const amount = getValueById('add-amount');
    const pin = getValueById('add-pin');
    const mainBalance = getInnerTextById('main-balance');
    const bankName = document.getElementById('bank-select').value;
    if (bankAccountNumber.length === 11) {
        if (pin === 1234) {
            const newBalance = amount + mainBalance;
            const balance = addNewInner_Text('main-balance', newBalance);

            const container = document.getElementById('history-container');
            const div = document.createElement('div');
            div.classList.add("flex", "justify-between", "items-center", "p-2", "bg-white", "rounded-xl");

            div.innerHTML = `
                <div class="flex gap-2">
                                <div class="rounded-[50%] p-2 bg-[#0808080D] flex justify-center items-center">
                                    <img src="./assets/wallet1.png" alt="">
                                </div>
                                <div>
                                    <h4 class="text-[#080808B3] font-semibold text-lg">Add Money</h4>
                                    <p class="text-[#080808B3]"> Money $${amount} added from ${bankName} (${bankAccountNumber})</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>

            `
            container.appendChild(div);
            alert('Money Added');
        }
        else {
            alert("Invalid PIN");
        }
    }
    else {
        alert('Enter Valid Account Number');
    }
})

document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = "./index.html";
})