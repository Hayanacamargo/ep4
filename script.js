function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome."); /* colocar um alerta */
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked'); /* CHEGAR AS QUESTOES */
    var resp2 = document.querySelector('input[name="quest_2"]:checked');; /* CHEGAR AS QUESTOES */
    var resp3 = document.querySelector('input[name="quest_3"]:checked');; /* CHEGAR AS QUESTOES */
    var resp4= document.querySelector('input[name="quest_4"]:checked');; /* CHEGAR AS QUESTOES */
    var resp5 = document.querySelector('input[name="quest_5"]:checked');; /* CHEGAR AS QUESTOES */
    var resp6 = document.querySelector('input[name="quest_6"]:checked');; /* CHEGAR AS QUESTOES */
    var resp7 = document.querySelector('input[name="quest_7"]:checked');; /* CHEGAR AS QUESTOES */
    var resp8 = document.querySelector('input[name="quest_8"]:checked');; /* CHEGAR AS QUESTOES */
    var resp9 = document.querySelector('input[name="quest_9"]:checked');; /*/* CHEGAR AS QUESTOES */
    var resp10 = document.querySelector('input[name="quest_10"]:checked');/* CHEGAR AS QUESTOES */
    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10 ){
        if(resp1.value == "correta"){ /* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_1").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois a gabrieely ainda nao superou o docinhop de coco!";/*  */

        }
        if(resp2.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_2").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois a geovana vivi chamando o propio namorado de feio!";

        }
        if(resp3.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_3").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a gabii e muito doce!";

        }
        if(resp4.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_4").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a gabrielly da fora nos piopas m,aios gatos da escola!";

        }
     
        if(resp5.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_5").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, pois ihgnieui9hgfhh-98gf-8rawh!";

        }

        if(resp6.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_6").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!";

        }
    
        if(resp7.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_7").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!";

        }
    
        if(resp8.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_8").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!";

        }

        if(resp9.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_9").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!";

        }

        if(resp10.value == "correta"){/* COLOCAR SE A RESPOSTA ESTA CERTA OU ERRADA */
            document.getElementById("resp_correta_10").innerHTML = "Correta!";
            contador = contador + 1;/* CONTAR OS PONTOS */
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!";

        }

        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }

    
    else{
        alert("não deixe questões em branco!");
    }

}
