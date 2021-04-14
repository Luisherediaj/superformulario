'use strict'

const form = document.querySelector("#formulario2");
const txtNombre = document.getElementById('#nombre').value;

var formularioCorrecto = true;

if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
    alert('ERROR: El campo nombre no debe ir vacío');
    return false;
  }





form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
})

function sendData(){

    // 1. inicializar el objeto xhr
    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2. cargar la petición
    xhr.open("POST", "controller.php");
    
    let formData = new FormData(form);
    
    // Adjuntar variables
    formData.append("creatorForm", "Luis");

    // 3. enviar la petición
    xhr.send(formData);
}