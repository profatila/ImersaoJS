function media(){
    var aluno = document.getElementById("aluno").value
    var n1 = parseInt(document.getElementById('n1').value)
    var n2 = parseInt(document.getElementById('n2').value)
    var n3 = parseInt(document.getElementById('n3').value)

    // media
    var media = (n1 + n2 + n3) / 3

    // Exibir a média geral
    document.getElementById('media').innerHTML += " " + media


    var md_math = n1
    var md_port = n2
    var md_bio = n3

    // imprimir a media das materias

    document.getElementById('md_math').innerHTML = "Média em Matematica: " + md_math
    document.getElementById('md_port').innerHTML = "Média em Portugues: " + md_port
    document.getElementById('md_bio').innerHTML = "Média em Biologia: " + md_bio


    var conceito;

    // Estrutra pra ver se foi Reprovado! ou negado

    if (media >= 90) {
        conceito = "A"
        document.getElementById('conceito').innerHTML = `Aprovado! a nota do Aluno é ${conceito}`
    }

    else if (media >= 75 && media < 90) {
        conceito = "B"
        document.getElementById('conceito').innerHTML = `Aprovado! a nota do Aluno é ${conceito}`
    }

    else if (media >= 60 && media < 75)  {
        conceito = "C"
        document.getElementById('conceito').innerHTML = `Recuperação! a nota do Aluno é ${conceito}`
    }

    else if (media >= 40 && media < 60) {
        conceito = "D"
        document.getElementById('conceito').innerHTML = `Reprovado! a  nota do Aluno é ${conceito}`
    }

    else {
        conceito = "E"
        document.getElementById('conceito').innerHTML = `Reprovado! a  nota do Aluno é ${conceito}`
    }



    // Maior e menor nota

     // Calcular as notas máxima e mínima
     var maior = Math.max(n1, n2, n3);
     var menor= Math.min(n1, n2, n3);

    // Exibir as notas máxima e mínima
    document.getElementById('maior').innerHTML = "Maior Nota: " + maior;
    document.getElementById('menor').innerHTML = "Menor Nota: " + menor;
}