let datosJson;
let xhr = new XMLHttpRequest(); //creamos la variable con el XMLHttpRequest
xhr.open('GET', "persona.json", true); // decimos de donde obtenemos la informacion para la variable
xhr.responseType = "json"; // que tipo de dato esperamos
xhr.onload = function(){
    if(xhr.status === 200){ //estado de red
        datosJson = xhr.response; //guardar en la variable
        let txtNombre = document.getElementById("nombre");
        // txtNombre.textContent = datosJson.direccion.calle; // pa llamar de un array
        // txtNombre.textContent = datosJson.telefono[1]; 
        txtNombre.textContent = datosJson.nombre;
    }else{
        // manejar error
    }
}
xhr.send();
