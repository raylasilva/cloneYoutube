function MostrarMais(){
    var pontos= document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnMostrarMais=document.getElementById("btnMostrarMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnMostrarMais.innerHTML="MOSTRAR MAIS";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnMostrarMais.innerHTML="MOSTRAR MENOS";
    }
}



