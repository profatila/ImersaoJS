function calcular(){

let nome = parseInt (document.getElementById('nome').value)
let n1   = parseInt (document.getElementById('nota1').value)
let n2   = parseInt (document.getElementById('nota2').value)
let n3   = parseInt (document.getElementById('nota3').value)

document.getElementById('numeroAluno').innerHTML = 'O id do aluno é: ' + nome

let mf = (n1+n2+n3)/3
document.getElementById('mediaFinal').innerHTML = 'A média final é: ' + mf;
document.getElementById('notas').innerHTML = 'As notas são : nota 1 - ' + n1 + ', nota 2 - ' + n2 + ', nota 3 - ' + n3;

if (mf >= 90) {
    document.getElementById('situacao').innerHTML = 'Aprovado';
}
else if (mf < 90 && mf >= 75) {
    document.getElementById('situacao').innerHTML = 'Aprovado';
}
else if (mf >= 60 && mf < 75 ) {
    document.getElementById('situacao').innerHTML = 'Recuperação';
}
else if (mf >= 40 && mf < 60){
    document.getElementById('situacao').innerHTML = 'Reprovado';
}
else{
    document.getElementById('situacao').innerHTML = 'Reprovado'
}



let maiorNota = Math.max(n1,n2,n3)
let menorNota = Math.min(n1,n2,n3)

document.getElementById('maiorNota').innerHTML = 'A maior nota é: ' + maiorNota
document.getElementById('menorNota').innerHTML = 'A menor nota é: ' + menorNota

}