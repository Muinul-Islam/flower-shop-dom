function btnClicked(){
  const inputField = document.getElementById('input-field').value;

  const passwordField = document.getElementById('password-field').value;
  
  if(inputField === 'flower@gmail.com' || passwordField === 'myshop'){
    window.location.href = 'flower-shop.html';
  }
}