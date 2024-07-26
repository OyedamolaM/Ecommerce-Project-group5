






let vendorBtn = document.getElementById("vendorbtn");
 let userBtn = document.getElementById("userbtn");
let userForm = document.getElementById("user-form");
 const vendorForm = document.getElementById("vendor-form");
 const intro = document.querySelector('.container');
 
 const vendorLogin = document.getElementById("vendor-login-f");
 const vendorSignup = document.getElementById("vendor-signup-f");
 const userLogin = document.querySelector("#user-login-f");
 const userSignUpForm= document.querySelector("#user-signup-f");
 const browser = document.querySelector('#browser');
 const formError = document.querySelectorAll('h4')
 


 
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

  const anchorTag = document.querySelectorAll('a');
  anchorTag.forEach((anchors) =>{
  
    anchors.addEventListener('click',(event)=>{
      event.preventDefault();
      if (vendorLogin.checkValidity()) {
        window.location.href='landing page/landingpagemain.html';
      } else if(vendorSignup.checkValidity()) {
        window.location.href='landing page/landingpagemain.html';
      }
      else if(userSignUpForm.checkValidity()){
        window.location.href='landing page/landingpagemain.html';
      } else if(userLogin.checkValidity()){
        window.location.href='landing page/landingpagemain.html';
      }else if(this===browser){
        window.location.href='landing page/landingpagemain.html';
      }
      else{
      formError.style.display='block';
      }
    })
  })

 

