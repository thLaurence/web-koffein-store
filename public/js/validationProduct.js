const opciones = document.getElementById("opciones");
const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const enlace = document.getElementById("enlace");
const email = document.getElementById("email");
const producto = document.getElementById("producto");

const parrafo1 = document.getElementById("wOpciones");
const parrafo2 = document.getElementById("wMarca");
const parrafo3 = document.getElementById("wModelo");
const parrafo4 = document.getElementById("wEnlace");
const parrafo5 = document.getElementById("wEmail");
const parrafo6 = document.getElementById("wEnvio");

producto.addEventListener("submit", e =>{
    let vali = false;
    let wOpciones = '';
    let wMarca = '';
    let wModelo = '';
    let wEnlace = '';
    let wEmail = '';
    let entrar = false;
    let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    /*let valEnlace = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;*/
    parrafo1.innerHTML = "";
    parrafo2.innerHTML = "";
    parrafo3.innerHTML = "";
    parrafo4.innerHTML = "";
    parrafo5.innerHTML = "";

    /*Validar Opciones*/
    if(opciones.value == null || opciones.value == 0){
        wOpciones += 'Debe seleccionar un tipo de producto';
        entrar = true;
    }

    if(marca.value.length <= 2){
        wMarca += 'La marca no es válida';
        entrar = true;
    }

    if(modelo.value.length <= 2){
        wModelo += 'El modelo no es válido';
        entrar = true;
    }

    if(enlace.value.length <= 8){
        wEnlace += 'El enlace no es válido';
        entrar = true;
    }

    console.log(valEmail.test(email.value));
    if(!valEmail.test(email.value)){
        wEmail += 'El email no es válido';
        entrar = true;
    }

    if(entrar){
        parrafo1.innerHTML = wOpciones;
        parrafo2.innerHTML = wMarca;
        parrafo3.innerHTML = wModelo;
        parrafo4.innerHTML = wEnlace;
        parrafo5.innerHTML = wEmail;
    }else {
        parrafo6.innerHTML = '¡Registrado con éxito!';
        vali = true;
    }

    if(vali == false){
        e.preventDefault();
    }else {
        console.log("Listo")
    }
})