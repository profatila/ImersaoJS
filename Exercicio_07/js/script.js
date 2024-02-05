function app(){

    let indentificador = document.getElementById('id_aluno').value;

    let num1 = parseInt(document.getElementById('nota1').value);
    let num2 = parseInt(document.getElementById('nota2').value);
    let num3 = parseInt(document.getElementById('nota3').value);

    document.getElementById("mostrar_id").innerHTML = "Número de identificação: " + indentificador;
    document.getElementById("mostrar_nota1").innerHTML = "Primeira nota: " + num1;
    document.getElementById("mostrar_nota2").innerHTML = "Segunda nota: " + num2;
    document.getElementById("mostrar_nota3").innerHTML = "Terceira nota: " + num3;

    const listaNum = [num1, num2, num3];

    const maiorNum = Math.max.apply(null, listaNum);

    const menorNum = Math.min.apply(null, listaNum);


    document.getElementById("maior_nota").innerText = "Maior nota: " + maiorNum;

    document.getElementById("menor_nota").innerHTML = "Menor nota: " + menorNum;
    
    const media = (num1 + num2 + num3) / 3;

    document.getElementById("media").innerHTML = "Média final: " + media;

    
    if(media >= 75){
        document.getElementById("situacao").innerText = "A situação do aluno: " + "aprovado";
    }
    else if(media >= 60 && media < 75){
        document.getElementById("situacao").innerText = "A situação do aluno: " + "recuperação";
    }
    else{
        document.getElementById("situacao").innerText = "A situação do aluno: " + "reprovado";
    }

}