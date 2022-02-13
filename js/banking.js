//handle deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    //console.log(depositeAmount);
    //update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);
    depositeTotal.innerText = newDepositeTotal;


    //update account balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;



    //clear the deposite input field
    depositeInput.value = '';
});

//handle withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //console.log(withdrawAmount);


    //SET WITHDRAW TOTAL
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotaltext = withdrawTotal.innerText;
    const previousbalanceTotal = parseFloat(previousWithdrawTotaltext);
    const newWithdrawTotal = previousbalanceTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update account balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;



    //clear withdraw input
    withdrawInput.value = '';


});