function calcularMedia() {
    // Obter valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
  
    // Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;
  
    // Exibir a média
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Média: ${media.toFixed(2)}`;
  
    // Verificar aprovado
    if (media >= 90) {
      resultadoElement.textContent += '\nConceito A - Aprovado';
      exibirAprovado();
    } else if (media >= 75 && media < 90) {
      resultadoElement.textContent += '\nConceito B - Aprovado';
      exibirAprovado();
    } else if (media >= 60 && media < 75) {
      resultadoElement.textContent += '\nConceito C - Recuperação';
    } else if (media >= 40 && media < 60) {
      resultadoElement.textContent += '\nConceito D - Reprovado';
    } else {
      resultadoElement.textContent += '\nConceito E - Reprovado';
    }
  }
  

  

  