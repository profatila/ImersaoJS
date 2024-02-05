function BoletimEscolar() {
console.log("Função BoletimEscolar chamada!");

let nomeAluno = document.getElementById("nomeAluno").value;
console.log("Nome do aluno:", nomeAluno);

let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;
let n3 = document.getElementById("n3").value;

console.log("Notas:", n1, n2, n3);

let media;
let maiorNota;
let menorNota;
let situacao;
let conceito;

media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

menorNota = Math.min(parseFloat(n1), parseFloat(n2), parseFloat(n3));
maiorNota = Math.max(parseFloat(n1), parseFloat(n2), parseFloat(n3));


    if (media >= 90) {
        situacao = "Aprovado",
        conceito = "A"
    } 
    else if (media >= 75 && media < 90) {
        situacao = "Aprovado",
        conceito = "B"
    }
    else if (media >= 60 && media < 75) {
        situacao = "Recuperação",
        conceito = "C"
    }
    else if (media >= 40 && media < 60) {
        situacao = "Reprovado",
        conceito = "D"
    }
    else {
        situacao = "Reprovado",
        conceito = "E"
    }

document.getElementById("nome").innerText = "Nome do aluno: " + nomeAluno;
document.getElementById("1Bim").innerText = "Nota do 1° Bimestre: " + n1;
document.getElementById("2Bim").innerText = "Nota do 2° Bimestre: " + n2;
document.getElementById("3Bim").innerText = "Nota do 3° Bimestre: " + n3;
document.getElementById("med").innerText = "Média: " + media;
document.getElementById("notaMaior").innerText = "Maior nota: " + maiorNota;
document.getElementById("notaMenor").innerText = "Menor nota: " + menorNota;
document.getElementById("sitAluno").innerText = "Situação do aluno: " + situacao;
document.getElementById("concAluno").innerText = "Conceito obtido: " + conceito;
}