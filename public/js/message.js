window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#ocultar1');
    div.style.visibility = 'hidden';
    let boton = document.querySelector('#aviso1');
    boton.addEventListener('click', function (e) {
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden';
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
}

window.addEventListener('load', init2, false);
function init2() {
    let div = document.querySelector('#ocultar2');
    div.style.visibility = 'hidden';
    let boton = document.querySelector('#aviso2');
    boton.addEventListener('click', function (e) {
        if(div.style.visibility === 'visible'){
            div.style.visibility = 'hidden';
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
}