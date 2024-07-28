
let vendorBtn = document.getElementById("vendorbtn");
 let userBtn = document.getElementById("userbtn");
let userForm = document.getElementById("user-form");
 const vendorForm = document.getElementById("vendor-form");
 const intro = document.querySelector('.hero');
 const logo = document.querySelector('.logo');
const autoWrite = document.getElementById('auto-write');
let i = 0;
const usignupError = document.getElementById("Usignup-error");
const uloginError = document.getElementById("Ulogin-error"); 
const vsignupError = document.getElementById("Vsignup-error"); 
const vloginError = document.getElementById("Vlogin-error"); 
 
 const vendorLogin = document.getElementById("vendor-login-f");
 const vendorSignup = document.getElementById("vendor-signup-f");
 const userLogin = document.querySelector("#user-login-f");
 const userSignUpForm= document.querySelector("#user-signup-f");
 const browser = document.querySelector('#browser');
 const formError = document.querySelectorAll('.form-error')
 const contentText ="At Shop.co, we're Passionate about providing high quality wears that makes you look and feels great. our mission is to ofer the latest fashion trends at affordable prices, with a focus on exeptional customer service.";


 
 function showUserForm() {
  userForm.style.display = 'block';
  vendorForm.style.display='none';
  intro.style.display = 'none';
 }

 function showVendorForm() {
   userForm.style.display = 'none';
  vendorForm.style.display = 'block';
  intro.style.display = 'none';}

  vendorBtn.addEventListener('click' , showVendorForm);
  userBtn.addEventListener('click' , showUserForm );

  function vendorln(){
    if (vendorLogin.checkValidity()) {
      window.location.href='landing page/landingpagemain.html';
    } else{
      vloginError.style.display='block';
    }
  }

  function vendorSn(){
    if(vendorSignup.checkValidity()) {
      window.location.href='landing page/landingpagemain.html';
    } else{
      vsignupError.style.display='block';
    }
  }

  function  userSn(){
    if(userSignUpForm.checkValidity()){
      window.location.href='landing page/landingpagemain.html';
    } else{
      usignupError.style.display='block';
    }
  }

function userLn(){
  if(userLogin.checkValidity()){
    window.location.href='landing page/landingpagemain.html';
  } else{
    uloginError.style.display='block';
  }
}


 
function writeAuto(){
  if(i<contentText.length){
    autoWrite.textContent += contentText[i];
    i++;
    setTimeout(writeAuto, 100);
  } else{
    i = 0;
    autoWrite.textContent ='';
    writeAuto();
  }

}
writeAuto();