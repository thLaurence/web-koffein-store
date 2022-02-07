const btnCoin = document.querySelector('#btnCoin');
const tbCoin = document.querySelector('#tbCoin');
let cont = 0;
tbCoin.style.visibility = 'hidden';
btnCoin.addEventListener('click', e =>{
    
    console.log(cont);
    if(cont == 0){
        tbCoin.style.visibility = 'visible';
        $.get("https://mindicador.cl/api",
        function(data){
        $.each(data,function(i,item){
            if(item.codigo == null){
                $("#tbCoin").append("");
            }else {
                $("#tbCoin").append("<tr><td>"+item.codigo+"</td><td>"+ item.valor + "</td></tr>");
                }
            });
        });
            cont += 1;
    }
})