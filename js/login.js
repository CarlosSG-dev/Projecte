
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }

let formData = new FormData();

class Usuario{


	constructor() {
    this.user;
    this.pass;
  }


}



function postFetchForSignUp() {
  let email = document.querySelector("#email")
  let pass = document.querySelector("#pass")
  fetch('http://localhost/', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      pass: pass.value
    })
  })
  .then(res=>res.json())
  .then(user => {
    localStorage.clear()                                                            
    localStorage.id = user.id  
    slapUser(user)
    logOutButton()
  })
}

signInButton.addEventListener('click', e => {
  signInForm()
  let form = signDiv.querySelector('.sign-in')
  let pass = document.querySelector("#pass")
  form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch('http://localhost/') 
    .then(res=>res.json()) 
    .then(usersArray => { 
      let user = usersArray.find(function(user){ 
          return user.username === pass.value 
        })
      if (user){
        signDiv.innerHTML = ""
        slapUser(user)
        localStorage.id = user.id 
        logOutButton()
        writeReview()
      }
    })
  })
})

function logOutButton(){
  let logOutButton = document.getElementById('salir');
  logOutButton.addEventListener('click', e=>{
    localStorage.clear() 
  })
 }





 


