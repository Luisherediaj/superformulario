const form = document.querySelector("#formulario2");

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