var objUsuaris = [
	{
		username: 'jose',
		password: 'castillo123'
	},
	{
		username: 'carlos',
		password: 'soler123'
	}
	
]

// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('email').value
	// retreive data from password and store in password variable
	var password = document.getElementById('pass').value

	// loop through all the user pbjects and confrim if the username and password are correct
	for(var i = 0; i < objUsuaris.length; i++) {
		// check to 
		if(username == objUsuaris[i].username && password == objUsuaris[i].password) {
			console.log(username + ' està logejat!!!')
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break
		} else {
			// error if username and password don't match
			console.log('User o pass incorrectes')
		}
	}
}

// register functionality
function registerUser() {
	// store new users username
	var registerUsername = document.getElementById('newUsername').value
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objUsuaris.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objUsuaris[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
	// push new object to the people array
	objUsuaris.push(newUser)
	// console the updated people array
	console.log(objUsuaris)
}










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





 


