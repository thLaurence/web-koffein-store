const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const fono = document.getElementById("fono");
const password = document.getElementById("password");
const passwordConf = document.getElementById("passwordConf");
const registro = document.getElementById("registro");

const parrafo1 = document.getElementById("wNombre");
const parrafo2 = document.getElementById("wApellido");
const parrafo3 = document.getElementById("wPass");
const parrafo4 = document.getElementById("wPassConf");
const parrafo5 = document.getElementById("wEmail");
const parrafo6 = document.getElementById("wFono");
const parrafo7 = document.getElementById("wEnvio");

registro.addEventListener("submit", e =>{
    let vali = false;
    let wNombre = '';
    let wApellido = '';
    let wPass = '';
    let wPassConf = '';
    let wEmail = '';
    let wFono = '';
    let wEnvio = '';
    let entrar = false;
    let valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let valPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    parrafo1.innerHTML = "";
    parrafo2.innerHTML = "";
    parrafo3.innerHTML = "";
    parrafo4.innerHTML = "";
    parrafo5.innerHTML = "";
    parrafo6.innerHTML = "";

    /*Validar nombre */
    if(nombre.value.length <= 2){
        wNombre += 'El nombre no es válido...';
        entrar = true;
    }
    /*Validar apellidos*/
    if(apellidos.value.length == 0){
        wApellido += 'Los apellidos no son válidos...';
        entrar = true;
    }
    /*Validar contraseña*/
    /*if(password.value.length == 0){
        wPass += 'La contraseña no es válida...';
        entrar = true;*/
    console.log(valPass.test(password.value));
    if(!valPass.test(password.value)){
        wPass += 'La contraseña no es válida...';
        entrar = true;
    }else if(password.value.length < 8){
        wPass += 'La contraseña no es válida...';
        entrar = true;
    }
    if(password.value != passwordConf.value){
        wPassConf += 'Las contraseñas no coinciden...';
        entrar = true;
    }

     /*Validar Email*/
     console.log(valEmail.test(email.value));
     if(!valEmail.test(email.value)){
         wEmail += 'El email no es válido';
         entrar = true;  
     }
 
     if(fono.value.length < 11){
         wFono += 'El número ingresado no es válido';
         entrar = true;
     }

    if(entrar){
        parrafo1.innerHTML = wNombre;
        parrafo2.innerHTML = wApellido;
        parrafo3.innerHTML = wPass;
        parrafo4.innerHTML = wPassConf;
        parrafo5.innerHTML = wEmail;
        parrafo6.innerHTML = wFono;

    }else {
        parrafo7.innerHTML = '¡Registrado con éxito!';
        vali = true;
    }

    if(vali == false){
        e.preventDefault();
    }
})


