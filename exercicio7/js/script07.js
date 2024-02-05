function calcularBoletim() {
    let nomeAluno = document.getElementById('nomeAluno').value;
    let idAluno = document.getElementById('idAluno').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
 
    let notas = [nota1, nota2, nota3];
    let maiorNota = Math.max(...notas);
    let menorNota = Math.min(...notas);
    let mediaFinal = (nota1 + nota2 + nota3) / 3;
    let conceito;
 
    if (mediaFinal >= 90) {
        conceito = 'A';
    } else if (mediaFinal >= 80) {
        conceito = 'B';
    } else if (mediaFinal >= 70) {
        conceito = 'C';
    } else if (mediaFinal >= 60) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }
 
    let aviso;
    if (conceito === 'A' || conceito === 'B') {
        aviso = 'Aprovado';
    } else if (conceito === 'C') {
        aviso = 'Recuperação';
    } else {
        aviso = 'Reprovado';
    }
 
    let resultado = `
        <p>Nome do Aluno: ${nomeAluno}</p>
        <p>Número de Identificação: ${idAluno}</p>
        <p>Notas Bimestrais: ${nota1}, ${nota2}, ${nota3}</p>
        <p>Bimestre com a Maior Nota: ${maiorNota}</p>
        <p>Bimestre com a Menor Nota: ${menorNota}</p>
        <p>Média Final: ${mediaFinal.toFixed(2)}</p>
        <p>Conceito: ${conceito}</p>
        <p>Aviso: ${aviso}</p><br>
    `;
 
    document.getElementById('resultado').innerHTML = resultado;
}