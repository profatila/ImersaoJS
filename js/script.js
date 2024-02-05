let id_aluno = document.getElementById('id-aluno');

let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');

let media;
let maior_nota;
let menor_nota;
let conceito;
let situacao;

function calcularMedia() {

    media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
}

function pegarMaiorMenorNota() {

    maior_nota = Math.max(nota1.value, nota2.value, nota3.value);
    menor_nota = Math.min(nota1.value, nota2.value, nota3.value);
}

function atribuirSituacao() {

    switch (true) {
        case media >= 90:
            conceito = "A";
            
            break;
        case media >= 75 && media < 90:
            conceito = "B";

            break;
        case media >= 60 && media < 75:
            conceito = "C";
            
            break;
        case media >= 40 && media < 60:
            conceito = "D";
            
            break;
        case media < 40:
            conceito = "E";

            break;
    }

    switch (conceito) {
        case "A":
        case "B":
            situacao = "Aprovado";

            break;
        case "C":
            situacao = "Recuperação";

            break;
        case "D":
        case "E":
            situacao = "Reprovado";

            break;
    }
}

function enviarInfo() {

    calcularMedia();
    pegarMaiorMenorNota();
    atribuirSituacao();

    localStorage.setItem("id_aluno", id_aluno.value);
    localStorage.setItem("nota1", nota1.value);
    localStorage.setItem("nota2", nota2.value);
    localStorage.setItem("nota3", nota3.value);
    localStorage.setItem("maior_nota", maior_nota);
    localStorage.setItem("menor_nota", menor_nota);
    localStorage.setItem("media", media);
    localStorage.setItem("conceito", conceito);
    localStorage.setItem("situacao", situacao);

    window.location.href = "resultado.html";
}