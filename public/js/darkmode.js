const btnSwitch = document.querySelector('#switch');
const menu = document.querySelector('#menu');
const footer = document.querySelector('#footer');
const logo = document.querySelector('#logo');
const imgLogo = document.querySelector('#imgLogo');
const C1 = document.querySelector('#C1');
const C2 = document.querySelector('#C2');
const C3 = document.querySelector('#C3');
const C4 = document.querySelector('#C4');
const C5 = document.querySelector('#C5');
const T1 = document.querySelector('#T1');
const T2 = document.querySelector('#T2');
const T3 = document.querySelector('#T3');
const T4 = document.querySelector('#T4');
const I1 = document.querySelector('#I1');
const I2 = document.querySelector('#I2');
const I3 = document.querySelector('#I3');



btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    document.body.classList.toggle('normal');
    btnSwitch.classList.toggle('active');
    menu.classList.toggle('darkNav');
    menu.classList.toggle('normalNav');
    footer.classList.toggle('darkFooter');
    footer.classList.toggle('normalFooter');
    logo.classList.toggle('darkLogo');
    logo.classList.toggle('normalLogo');

    if(menu.classList.contains("darkNav")){
        imgLogo.setAttribute("src","../css/img/nav/icon_keyboard - dark.png");

    }else if(menu.classList.contains("normalNav")){
        imgLogo.setAttribute("src","../css/img/nav/icon_keyboard.png");
    }
    
    C1.classList.toggle('darkBorder')
    C1.classList.toggle('normalBorder')
    C2.classList.toggle('darkBorder')
    C2.classList.toggle('normalBorder')
    C3.classList.toggle('darkBorder')
    C3.classList.toggle('normalBorder')
    C4.classList.toggle('darkBorder')
    C4.classList.toggle('normalBorder')
    C5.classList.toggle('darkBorder')
    C5.classList.toggle('normalBorder')

    T1.classList.toggle('darkBorder')
    T1.classList.toggle('normalBorder')
    T2.classList.toggle('darkBorder')
    T2.classList.toggle('normalBorder')
    T3.classList.toggle('darkBorder')
    T3.classList.toggle('normalBorder')
    T4.classList.toggle('darkBorder')
    T4.classList.toggle('normalBorder')

    I1.classList.toggle('darkBorder')
    I1.classList.toggle('normalBorder')
    I2.classList.toggle('darkBorder')
    I2.classList.toggle('normalBorder')
    I3.classList.toggle('darkBorder')
    I3.classList.toggle('normalBorder')

    //Guardar en localstorage

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }
});

if(localStorage.getItem('dark-mode') == "true"){
    document.body.classList.toggle('dark');
    document.body.classList.toggle('normal');
    btnSwitch.classList.toggle('active');
    menu.classList.toggle('darkNav');
    menu.classList.toggle('normalNav');
    footer.classList.toggle('darkFooter');
    footer.classList.toggle('normalFooter');
    logo.classList.toggle('darkLogo');
    logo.classList.toggle('normalLogo');

    if(menu.classList.contains("darkNav")){
        imgLogo.setAttribute("src","../css/img/nav/icon_keyboard - dark.png");

    }else if(menu.classList.contains("normalNav")){
        imgLogo.setAttribute("src","../css/img/nav/icon_keyboard.png");
    }
    
    C1.classList.toggle('darkBorder')
    C1.classList.toggle('normalBorder')
    C2.classList.toggle('darkBorder')
    C2.classList.toggle('normalBorder')
    C3.classList.toggle('darkBorder')
    C3.classList.toggle('normalBorder')
    C4.classList.toggle('darkBorder')
    C4.classList.toggle('normalBorder')
    C5.classList.toggle('darkBorder')
    C5.classList.toggle('normalBorder')

    T1.classList.toggle('darkBorder')
    T1.classList.toggle('normalBorder')
    T2.classList.toggle('darkBorder')
    T2.classList.toggle('normalBorder')
    T3.classList.toggle('darkBorder')
    T3.classList.toggle('normalBorder')
    T4.classList.toggle('darkBorder')
    T4.classList.toggle('normalBorder')

    I1.classList.toggle('darkBorder')
    I1.classList.toggle('normalBorder')
    I2.classList.toggle('darkBorder')
    I2.classList.toggle('normalBorder')
    I3.classList.toggle('darkBorder')
    I3.classList.toggle('normalBorder')

} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}