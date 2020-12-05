/*** FALTA MOLT PER ARREGLAR AL LOGIN *********/

var objUsuaris = [
	{
		username: 'jose',
		password: 'castillo'
	},
	{
		username: 'carlos',
		password: 'soler'
	}
	
]
cargarUsers();

function cargarUsers(){

  for (let i = 0; i < objUsuaris.length; i++) {
     console.log("Usuario "+objUsuaris[i].username+ (" cargado con éxito"));
    
  }
  console.log('usuarios cargados');
}


function login() {
	
	var username = document.getElementById('email').value
	var password = document.getElementById('pass').value
	
	for(var i = 0; i < objUsuaris.length; i++) {
		
		if(username === objUsuaris[i].username && password === objUsuaris[i].password) {
      console.log(username + ' esta logeado!!!')
      alert(username + ' esta logeado!!!')
			break;
		} else {	
      console.log('User o pass incorrectas') 		    
        if (!username === objUsuaris[i].username && !password === objUsuaris[i].password) {
            alert('User o Pass incorrectas')
            
        }
		}
	}
}

function logout(){
  var username = document.getElementById('email').value
	var password = document.getElementById('pass').value
	
	for(var i = 0; i < objUsuaris.length; i++) {
		
		if(username == objUsuaris[i].username && password == objUsuaris[i].password) {
      console.log(username + ' Deslogeado')
     /*  objUsuaris.pop(-1); */ //Elimina l'usuari al fer logout
      alert(username + ' Deslogeado!!!')
			break;
		} else {		
      if (!username === objUsuaris[i].username && !password === objUsuaris[i].password){	
      console.log('No hemos podido hacer logout, no hay ningún usuario logeado')
      alert('No hemos podido hacer logout, no hay ningún usuario logeado')
      }
		}
	}
  
}

/*No funciona bé el que ja estiga registrat el Usuari, seguix creant l'user*/
function registrarUser() {
	var registrarUsername = document.getElementById('nuevoUsername').value	
	var registrarPassword = document.getElementById('nuevaPassword').value
	
	var nouUser = {
		username: registrarUsername,
		password: registrarPassword
	}

	for(var i = 0; i < objUsuaris.length; i++) {
		for (let j = 0; j < nouUser.length; j++) {
		if(registrarUser == objUsuaris[i].username && registrarUser == nouUser[j].username) {
			alert('El usuario ya existe')
			break;
		} else if (registrarPassword.length < 8) {			
			alert('La contraseña es demasiado corta, debe tener más de 8 carácteres')
			break;
    }
  }
  console.log('no ha entrat en el loop')
	}
  if(objUsuaris.push(nouUser))
  alert('Usuario añadido correctamente')
	console.log(objUsuaris)
}








/*******Funcions per a els efectes de canvi entre el login i el registre **********/

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



/********************************* CODI MOZ.DEV D'UN FETCH PER A REGISTRAR-SE I FER LOGIN ********* */
/* 
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
 } */





 


