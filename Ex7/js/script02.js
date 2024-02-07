function boletim(){
    let not1 = parseInt(document.getElementById('nota1').value)
    let not2 = parseInt(document.getElementById('nota2').value)
    let not3 = parseInt(document.getElementById('nota3').value)

    let media = (not1 + not2 + not3) / 3;

    let maiorNota = 0;
    let menorNota = 0;
    let conceito =  String;
    let situação = String;

    let nome = document.getElementById('id').value;

    if(not1 > not2 &&  not1 > not3){
        maiorNota = "1ºBimestre";
    }else if (not2 > not1 && not2 > not3){
        maiorNota = "2ºBimestre";
    }else{
        maiorNota = "3ºBimestre";
    }

    if(not1 < not2 &&  not1 < not3){
        menorNota = "1ºBimestre";
    }else if (not2 < not1 && not2 < not3){
        menorNota = "2ºBimestre";
    }else{
        menorNota = "3ºBimestre";
    }

    if (media >= 90){
        conceito = "A";
        situação = "Aprovado";
    }else if (media >= 75 && media <90){
        conceito = "B";
        situação = "Aprovado";
    }else if (media >= 60 && media <75){
        conceito = "C";
        situação = "Recuperação"
    }else if (media >= 40 && media <60){
        conceito = "D";
        situação = "Reprovado"
    }else{
        conceito = "E";
        situação = "Reprovado";
    }

    document.getElementById('conceitos').style.visibility = 'hidden';

    document.getElementById('id2').innerText = "Nome do Aluno: " + nome;
    document.getElementById('1bim').innerText = "Nota 1ºBimestre: " + not1;
    document.getElementById('2bim').innerText = "Nota 2ºBimestre: " + not2;
    document.getElementById('3bim').innerText = "Nota 3ºBimestre: " + not3;
    document.getElementById('maiorN').innerText = "Bimestre com maior nota: " + maiorNota;
    document.getElementById('menorN').innerText = "Bimestre com menor nota: " + menorNota;
    document.getElementById('media').innerText = "Média obtida: " + media;
    document.getElementById('conceito').innerText = "O conceito obtido foi: " + conceito + ".\n Situação: " + situação;

}