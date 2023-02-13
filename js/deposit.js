document.getElementById('btn-deposit').addEventListener('click', function(){

  const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  console.log(newDepositAmount);

  depositField.value = '';

  if(isNaN(newDepositAmount)){
    alert('Please Type Number Not Letter');
    return;
  }
 

  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  previousBalanceTotal = parseFloat(previousBalanceTotalString);


  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  depositField.value = '';

})