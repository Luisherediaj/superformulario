'use strict'

const form = document.querySelector("#formulario2");
// const txtNombre = document.getElementById('#nombre').value;
const camposTexto = document.getElementById("formulario2").elements; 

var formularioCorrecto = true;

// if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
//     alert('ERROR: El campo nombre no debe ir vacío');
//     return false;
//   }

for (x=0; x < camposTexto.length; x++) {
    if (camposTexto[x].value == '' && camposTexto[x].type=='text'){
        alert("El campo " + camposTexto[x].id + " está vacio y es OBLIGATORIO");
        return false;
    }
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