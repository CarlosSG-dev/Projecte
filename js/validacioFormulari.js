function enviar() {
  if (validaRegistro())
    document.getElementById('formulari').submit();
}

function validaRegistro() {
    var error = false;

    if(!validaUsuario())
        error = true;
    if(!validaApellidos())
        error = true;
    if(!validaPassword())
        error = true;
    if(!validaEmail())
        error = true;
    if(!validaWeb())
        error = true;
    if(!validaFecha())
        error = true;
    if(error)
        return false;
    else
        return true;
}

//Validacion campos
function validaUsuario() {
    var usuario = document.getElementById("registre-nom");
    contenidoUsuario = usuario.value;

    desmarcarError("usuario");

    if (vacio(contenidoUsuario)){
        marcarError("usuario", "El Usuario no puede estar vacio");
        return false;
    }

    if (contenidoUsuario.length > 25){
        marcarError("usuario", "El Usuario debe contener menos de 25 caracteres");
        return false;
    }

    if (!alfanumerico(contenidoUsuario)){
        marcarError("usuario", "El Usuario no puede contener simbolos");
        return false;
    }

    return true;
}

function validaApellidos() {
    var apellidos = document.getElementById("cognoms");
    contenidoApellidos = apellidos.value;

    desmarcarError("apellidos");

    if (vacio(contenidoApellidos)){
        marcarError("apellidos", "Los apellidos no pueden estar vacios");
        return false;
    }

    if (contenidoApellidos.length < 3){
        marcarError("apellidos", "Los apellidos deben contener al menos 3 carácteres");
        return false;
    }

    if (!alfanumerico(contenidoApellidos)){
        marcarError("apellidos", "Los apellidos no pueden contener simbolos");
        return false;
    }

    return true;
}

function validaPassword() {
    var password = document.getElementById("contrasena");
    contenidoPassword = password.value;

    desmarcarError("password");

    if (vacio(contenidoPassword)){
        marcarError("password", "La Contraseña no puede estar vacia");
        return false;
    }

    if (contenidoPassword == contenidoUsuario) {
        marcarError("password", "La Contraseña no puede ser igual al Usuario");
        return false;
    }

    if (passwordNoSeguro(contenidoPassword)){
        marcarError("password", "La Contraseña debe contener al menos un numero, una letra");
        return false;
    }

    if (contenidoPassword.length < 6){
        marcarError("password", "La Contraseña debe contener al menos 6 caracteres");
        return false;
    }

    return true;
}


function validaEmail() {
    var email = document.getElementById("email");
    contenidoEmail = email.value;

    desmarcarError("email");

    if (formatoEmail(contenidoEmail)){
        marcarError("email", "Formato de Email incorrecto");
        return false;
    }

    return true;
}

function validaWeb() {
    var website = document.getElementById("url");
    contenidoURL = website.value;

    desmarcarError("website");

    if (formatoWebsite(contenidoURL)){
        marcarError("web", "Formato de URL incorrecto");
        return false;
    }

    return true;
}

function validaFecha() {
    var fecha = document.getElementById("datainici");
    contenidoFecha = fecha.value;

    console.log(contenidoFecha);

    desmarcarError("fecha");
    
    if (contenidoFecha.length < 1) {
        marcarError("fecha", "La Fecha debe tener valor");
        return false;
    }

    // if (formatoFechaCorrecto(contenidoFecha)){
    //     marcarError("fecha", "La Fecha debe tener este formato dd/mm/aaaa");
    //     return false;
    // }
    if (!fechaValida(contenidoFecha)){
        marcarError("fecha", "La Fecha no es valida");
        return false;
    }

    return true;
}

//Reglas Validacion
function vacio(q) {
    for ( i = 0; i < q.length; i++ ) {
        if ( q.charAt(i) != " " ) {
                return false;
        }
    }
    return true;
}

function alfanumerico(q) {
    var patron= /^[a-zA-Z0-9]*$/;
    if(!patron.test(q))
        return false;
    return true;
}

function passwordNoSeguro(q) {
    var patron= /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{0,20})$/;
    if(q.match(patron))
        return false;
    return true;
}

function formatoFechaCorrecto(q) {
    var patron= /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if(patron.test(q))
        return false;
    return true;
}

function fechaValida(q) {
    var fechaOK;
    var fechaArr = q.split('-');
    var anyo = parseInt(fechaArr[0]);
    var mes = parseInt(fechaArr[1]);
    var dia = parseInt(fechaArr[2]);

    var plantilla = new Date(anyo, mes - 1, dia);
    var actual = new Date();

    console.log(actual.toISOString())
    console.log(plantilla.toISOString())

    console.log(plantilla.getDate())

    if (plantilla.getDate() < actual.getDate())
        if (plantilla.getMonth() <= actual.getMonth())
            if (plantilla.getFullYear() <= actual.getFullYear())
                return false;

    if (plantilla.getFullYear() == actual.getFullYear())
        if (plantilla.getMonth() < actual.getMonth())
            return false;

    if (plantilla.getFullYear() < actual.getFullYear())
        return false;

    return true;
}

function formatoEmail(q) {
    var patron= /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if(patron.test(q))
        return false;
    return true;
}

function formatoWebsite(q) {
    var patron= /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(patron.test(q))
        return false;
    return true;
}

//Funciones Mostrar Errores
function marcarError(campo, error) {
    // campo.style.backgroundColor = "#D78484";
    // campo.style.color = "black";
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode(error);
    parrafo.appendChild(contenido);
    var contenedor = document.createElement("div");
    contenedor.className = "error";
    contenedor.id = campo + "-error";
    contenedor.appendChild(parrafo);
    var pos = getAbsoluteElementPosition(campo);
    contenedor.style.left = (pos.left + 250) +"px";
    contenedor.style.top = (pos.top + 500)  +"px";
    
    switch (campo) {
        case 'usuario':
            document.getElementById('caja-nom').appendChild(contenedor);
            document.getElementById('caja-nom').children[1].style.backgroundColor = "#D78484";
            break;
        case 'apellidos':
            document.getElementById('caja-cognom').appendChild(contenedor);
            document.getElementById('caja-cognom').children[1].style.backgroundColor = "#D78484";
            break;
        case 'email':
            document.getElementById('caja-email').appendChild(contenedor);
            document.getElementById('caja-email').children[1].style.backgroundColor = "#D78484";
            break;
        case 'web':
            document.getElementById('caja-web').appendChild(contenedor);
            document.getElementById('caja-web').children[1].style.backgroundColor = "#D78484";
            break;
        case 'password':
            document.getElementById('caja-pass').appendChild(contenedor);
            document.getElementById('caja-pass').children[1].style.backgroundColor = "#D78484";
            break;
        case 'fecha':
            document.getElementById('caja-fecha').appendChild(contenedor);
            document.getElementById('caja-fecha').children[1].style.backgroundColor = "#D78484";
            break;
    }

    
}

function desmarcarError(campo) {
    // campo.style.backgroundColor = "#EBEAEA";
    // campo.style.color = "#777";
    // var contenedor = document.getElementById(campo.id + "-error");
    // if(contenedor)
    //     contenedor.parentNode.removeChild(contenedor);
    // console.log(document.getElementById('usuario-error'));

    switch (campo) {
        case 'usuario':
            if (document.getElementById('usuario-error') != null) {
                document.getElementById('usuario-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('usuario-error').remove();
            }
            break;
        case 'apellidos':
            if (document.getElementById('apellidos-error') != null) {
                document.getElementById('apellidos-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('apellidos-error').remove();
            }
            break;
        case 'email':
            if (document.getElementById('email-error') != null) {
                document.getElementById('email-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('email-error').remove();
            }
            break;
        case 'website':
            if (document.getElementById('web-error') != null) {
                document.getElementById('web-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('web-error').remove();
            }
            break;
        case 'password':
            if (document.getElementById('password-error') != null) {
                document.getElementById('password-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('password-error').remove();
            }
            break;
        case 'fecha':
            if (document.getElementById('fecha-error') != null) {
                document.getElementById('fecha-error').parentNode.children[1].style.backgroundColor = "#EBEAEA";
                document.getElementById('fecha-error').remove();
            }
            break;
    }

    
        // document.getElementById('usuario-error').remove();
    // document.getElementById('apellidos-error').remove();
    // document.getElementById('email-error').remove();
    // document.getElementById('web-error').remove();

}

function getAbsoluteElementPosition(element) {
    if (!element)
        return { top:0,left:0 };

    var y = 0;
    var x = 0;
    while (element.offsetParent) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    }
    return {top:y,left:x};
}
