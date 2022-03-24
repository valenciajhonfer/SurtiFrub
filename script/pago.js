const tarjetaCredito = document.querySelector("#inputCard");
const cvc = document.querySelector("#inputCVC");
const monto = document.querySelector("#inputAmount");
const nombre = document.querySelector("#inputName");
const apellido = document.querySelector("#inputLastname");
const ciudad = document.querySelector("#inputCity");
const estado = document.querySelector("#inputState");
const codigoPostal = document.querySelector("#inputZip");
const cajaTarjetas = document.querySelector(".seleccionTarjeta");

function mostrarAlerta(){
    let mensajeAlerta = document.querySelector(".alert")
    mensajeAlerta.style.display = "block";
}
function ocultarAlerta(){
    let mensajeAlerta = document.querySelector(".alert")
    mensajeAlerta.style.display = "none";
}

function cambioColor(campoIncompleto){
    campoIncompleto.style.backgroundColor = "#f4cfcb";
}
function eliminarColor(campoIncompleto){
    campoIncompleto.style.backgroundColor = "#ffffff";
}

document.getElementById("miFormulario").addEventListener("submit", function(event){
    if(validator.isCreditCard(tarjetaCredito.value) !== true){
        mostrarAlerta();
        cambioColor(tarjetaCredito);
        event.preventDefault();
    }
    if(cvc.value === ""){
        cambioColor(cvc);
        event.preventDefault();
    }
    if(validator.isCurrency(monto.value, {allow_negatives: false,}) !== true){
        mostrarAlerta();
        cambioColor(monto);
        event.preventDefault();
    }
    if(validator.isAlpha(nombre.value) !== true){
        mostrarAlerta();
        cambioColor(nombre);
        event.preventDefault();
    }
    if(validator.isAlpha(apellido.value) !== true){
        mostrarAlerta();
        cambioColor(apellido);
        event.preventDefault();
    }
    if(validator.isAlpha(ciudad.value) !== true){
        mostrarAlerta();
        cambioColor(ciudad);
        event.preventDefault();
    }
    if(estado.value === ""){
        cambioColor(estado);
        event.preventDefault();
    }
    if(codigoPostal.value === ""){
        cambioColor(codigoPostal);
        event.preventDefault();
    }
    //Selección del tipo de tarjeta vacía*/
    let valorElegido = ""; 
    let inputElements = document.querySelectorAll('.form-check-input');
    for(let i=0; i<inputElements.length; i++){
        if(inputElements[i].checked){
            valorElegido = inputElements[i].value;
            {break}
        }
    }
    if(valorElegido === ""){
        mostrarAlerta();
        cambioColor(cajaTarjetas);
        event.preventDefault();
    }
})
document.getElementById("botonLimpiar").addEventListener("click", function(event){
    //document.getElementById("miFormulario").reset()//
    eliminarColor(tarjetaCredito);
    eliminarColor(cvc);
    eliminarColor(monto);
    eliminarColor(nombre);
    eliminarColor(apellido);
    eliminarColor(ciudad);
    eliminarColor(estado);
    eliminarColor(codigoPostal);
    eliminarColor(cajaTarjetas);
    ocultarAlerta()
})