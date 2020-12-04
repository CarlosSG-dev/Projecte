/*Data actual actualitzada del formulari de compra*/
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

document.getElementById('fecha').value = new Date().toDateInputValue();


/*Clases en la UI de la compra*/
class Criptomoneda{


	constructor(nombre, precio, cantidad, preuTotal, fechaCompra) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.preuTotal = precio*cantidad;
        this.fechaCompra = fechaCompra;
    }      
        
}

class Interfaz {
/*******************Mètodes de l'interfaç**************/
    anadirCripto(moneda){
        const listaCript = document.getElementById('lista-criptos');
        const elem = document.createElement('div');
        elem.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body text-dark">
                    <strong>Moneda</strong>: ${moneda.nom}
                    <strong>Precio</strong>: ${moneda.precio}
                    <strong>Cantidad</strong>: ${moneda.cantidad}
                    <strong>Precio Total</strong>: ${moneda.preuTotal}
                    <strong>Fecha de compra</strong>: ${moneda.fecha}
                    <a class="btn btn-danger" name="borrar" id="botoBorrar">Borrar</a>
                </div>
            </div>        
        `;
    listaCript.appendChild(elem);
    

    }

    eliminarCripto(element){
        element = document.getElementById("botoBorrar");
        if (element == true) {
            element.parentElement.parentElement.remove();
            this.mensaje('Moneda Eliminada', 'danger');
        }

    }

    mensaje(mensaje, claseCSS){
        const div = document.createElement('div');
        div.className=`alert alert-${claseCSS} mt-3`;
        div.appendChild(document.createTextNode(mensaje));
        //Mostra les alertes al comprar,etc
        const container = document.querySelector('#appCompra');
        const App =  document.querySelector('#AppCompra');
        container.insertBefore(div, App);

        //Eliminar Alertes als 3 seg
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)


    }

    resetearForm(){
        document.getElementById('form-criptomoneda').reset();
    }

}

//Eventos DOM
//Funció Fletxa dins d'un event -- Eliminar Moneda
document.getElementById("form-criptomoneda").addEventListener("click", (e) => {
    const ui = new Interfaz();
    ui.eliminarCripto(e.target);
    
  });


document.getElementById('form-criptomoneda').addEventListener('submit', function(event){
       event.preventDefault();
       const nom = document.getElementById('name').value;
       const preu = document.getElementById('precio').value;
       const cant = document.getElementById('cantidad').value;
       const preuTotal = preu*cant;
       const fecha = document.getElementById('fecha').value;
       
       
//Objectes -- Creem els objectes a añadir y la Intefaç de compra

      const cripto = new Criptomoneda(nom, preu, cant, preuTotal, fecha);
      const interfaz = new Interfaz();

        if(nom === '' || preu === '' || cant === '' || preuTotal === '' || fecha === ''){
           return interfaz.mensaje('Campos incompletos o moneda no seleccionada', 'warning');
        }
        console.log(cripto);
      interfaz.anadirCripto(cripto);
      interfaz.mensaje('Moneda comprada!', 'success');     
       
});


