document.getElementById('btn-withdraw').addEventListener('click',function(){
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmmountString = withdrawField.value;
  const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
  console.log(newWithdrawAmmount);

  withdrawField.value = '';

  if(isNaN(newWithdrawAmmount)){
    alert('Please Type Number Not Letter');
    return;
  }
 
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  withdrawField.value = '';

  if(newWithdrawAmmount > previousBalanceTotal){
    alert('Baap Er Bank A Ato Taka Nai');
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal =  previousBalanceTotal - newWithdrawAmmount;
  balanceTotalElement.innerText = newBalanceTotal;

})