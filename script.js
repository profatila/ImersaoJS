const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    // Guardando as tags HTML em váriaveis
    const identificacao = document.querySelector('#identificacao').value;
    const nota1 = document.querySelector('#notaUm').value;
    const nota2 = document.querySelector('#notaDois').value;
    const nota3 = document.querySelector('#notaTres').value;
    // Calculando a média
    let media = (Number(nota1) + Number(nota2) + (Number(nota3))) / 3;
    // Variaveis onde irão ser mostradas as informações
    let mostrarId = document.querySelector('#numId');
    let mostrarNotaUm = document.querySelector('#primeiraNota');
    let mostrarNotaDois = document.querySelector('#segundaNota');
    let mostrarNotaTres = document.querySelector('#terceiraNota');
    let mostrarMaiorNota = document.querySelector('#maiorNota');
    let mostrarMenorNota = document.querySelector('#menorNota');
    let mostrarMedia = document.querySelector('#media');
    let mostrarConceito = document.querySelector('#conceito');
    let mostrarResultado = document.querySelector('#resultadoFinal')

    // Saídas
    mostrarId.textContent = 'Identificação do aluno: ' + identificacao;
    mostrarNotaUm.textContent = 'Nota do primeiro bimestre: ' + nota1;
    mostrarNotaDois.textContent = 'Nota do segundo bimestre: ' + nota2;
    mostrarNotaTres.textContent = 'Nota do terceiro bimestre: ' + nota3;

    // Condições para as próximas saídas
    if((nota1 > nota2) && (nota1 > nota3)){
        mostrarMaiorNota.textContent = 'A maior nota foi a do primeiro bimestre';
    }else if((nota2 > nota1) && (nota2 > nota3)){
        mostrarMaiorNota.textContent = 'A maior nota foi a do segundo bimestre';
    }else{
        mostrarMaiorNota.textContent = 'A maior nota foi a do terceiro bimestre';
    }

    // Condições para as próximas saídas
    if((nota1 < nota2) && (nota1 < nota3)){
        mostrarMenorNota.textContent = 'A menor nota foi a do primeiro bimestre';
    }else if((nota2 < nota1) && (nota2 < nota3)){
        mostrarMenorNota.textContent = 'A menor nota foi a do segundo bimestre';
    }else{
        mostrarMenorNota.textContent = 'A menor nota foi a do terceiro bimestre';
    }

    // Mostrando a média do aluno
    mostrarMedia.textContent = 'A média do aluno foi: ' + media.toFixed(2);

    // Condições para as próximas saídas
    if(media >= 90){
        mostrarConceito.textContent = 'Conceito: A';
        mostrarResultado.textContent = 'Resultado: Aprovado';
    }else if(media >= 75){
        mostrarConceito.textContent = 'Conceito: B';
        mostrarResultado.textContent = 'Resultado: Aprovado';
    }else if(media >= 60){
        mostrarConceito.textContent = 'Conceito: C';
        mostrarResultado.textContent = 'Resultado: Recuperação';
    }else if(media >= 40){
        mostrarConceito.textContent = 'Conceito: D';
        mostrarResultado.textContent = 'Resultado: Reprovado';
    }else{
        mostrarConceito.textContent = 'Conceito: E';
        mostrarResultado.textContent = 'Resultado: Reprovado';
    }

})
