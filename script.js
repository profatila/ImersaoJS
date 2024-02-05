function calcular(){
    //Declarar variáveis
    let ident = parseInt(document.getElementById("identificacao").value)
    let nota1 = parseInt(document.getElementById("nota1").value)
    let nota2 = parseInt(document.getElementById("nota2").value)
    let nota3 = parseInt(document.getElementById("nota3").value)

    //Output de informações
    document.getElementById("out_ident").innerHTML = "Identificação do aluno: " + ident
    document.getElementById("out_notas").innerHTML = "Notas dos bimestres:<br>1° bimestre: " + nota1 + "<br>2° bimestre: " + nota2 + "<br>3° bimestre: " + nota3

    //Estrutura condicional para definir maior nota
    if (nota1 > nota2 && nota1 > nota3) {
        document.getElementById("out_maior").innerHTML = "Maior nota: <br>1° bimestre: " + nota1
    } 
    else if (nota2 > nota3 && nota2 > nota1) {
        document.getElementById("out_maior").innerHTML = "Maior nota: <br>2° bimestre: " + nota2
    }
    else {
        document.getElementById("out_maior").innerHTML = "Maior nota: <br>3° bimestre: " + nota3
    }

    //Estrutura condicional para definir menor nota
    if (nota1 < nota2 && nota1 < nota3) {
        document.getElementById("out_menor").innerHTML = "Menor nota: <br>1° bimestre: " + nota1
    } 
    else if (nota2 < nota3 && nota2 < nota1) {
        document.getElementById("out_menor").innerHTML = "Menor nota: <br>2° bimestre: " + nota2
    }
    else {
        document.getElementById("out_menor").innerHTML = "Menor nota: <br>3° bimestre: " + nota3
    }

    //Calcular média
    let media = (nota1 + nota2 + nota3) / 3
    document.getElementById("out_media").innerHTML = "Média final: " + media.toFixed(2); //Reduzir casa decimal a dois 

    //Calcular conceito e situação

    let situacao;
    let conceito;

        if (media >= 90) {
        conceito = "A"
        situacao = "Aprovado"
       }

        else if (media >= 75 & media < 90) {
        conceito = "B"
        situacao = "Aprovado"
       }

        else if (media >= 60 && media < 70) {
            conceito = "C"
            situacao = "Recuperação"
       }

        else if (media >= 40 && media < 60) { 
            conceito = "D"
            situacao = "Reprovado"
       }

        else {
            conceito = "E"
            situacao = "Reprovado"
       }
       
       document.getElementById("out_conceito").innerHTML = "Conceito: " + conceito
       document.getElementById("out_situacao").innerHTML = "Situação: " + situacao
}