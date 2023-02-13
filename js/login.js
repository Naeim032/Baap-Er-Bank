document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  email = emailField.value;

  const passwordField = document.getElementById('user-password');
  password = passwordField.value;
  console.log(email, password);

  if(email === 'mdnaeimsiddike032@gmail.com' && password === 'passwordbolbona'){
    window.location.href = 'bank.html';
  }
  else{
    alert('I cannot found your address');
  }


})