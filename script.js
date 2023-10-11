function botaozinho_resposta() {
    var respostaUsuario1 = document.querySelector ('input[name="resposta"]:checked');
    var respostaUsuario2 = document.querySelector ('input[name="resposta"]:checked');
    var respostaUsuario3 = document.querySelector ('input[name="resposta"]:checked');
    var respostaUsuario4 = document.querySelector ('input[name="resposta"]:checked');
    var respostaUsuario5 = document.querySelector ('input[name="resposta"]:checked');

    if(respostaUsuario1  && respostaUsuario2  && respostaUsuario3 && respostaUsuario4 && respostaUsuario5){
        if(respostaUsuario1.value === "correto")
            document.getElementById("resultado_1").innerHTML = "acertou";
   }
    else{
        document.getElementById("resultado_1").innerHTML = "ERROU!!!";
    }
    if(respostaUsuario1.value === "correto"){
        document.getElementById("resultado_2").innerHTML = "acertou";
    }
        else{
            document.getElementById("resultado_2").innerHTML = "ERROU!!!";
        }