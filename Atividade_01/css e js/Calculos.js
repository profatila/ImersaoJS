function calcular(){
    var id = document.getElementById('id').value 
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var n3 = document.getElementById('n3').value

    var media = (Number(n1) + Number(n2) + Number(n3))/3

    alert(`A média dos valores do aluno(${id}) é: ${media.toFixed(2)}`)

    var N_maior = Math.max(n1, n2, n3);
    document.getElementById("N_maior").innerHTML = `A maior nota dele é ${N_maior}`;

    var N_maior = Math.min(n1, n2, n3);
    document.getElementById("N_menor").innerHTML = `A menor nota dele é ${N_maior}`;

    var conceito;

    switch (true) {
        case (media >= 90):
            conceito = "A";
            document.getElementById("conceito").innerHTML = `A situação do aluno é Aprovado(${conceito})`;
            break;
        case (media >= 75 && media < 90):
            conceito = "B";
            document.getElementById("conceito").innerHTML = `A situação do aluno é Aprovado(${conceito})`;
            break;
        case (media >= 60 && media < 75):
            conceito = "C";
            document.getElementById("conceito").innerHTML = `A situação do aluno é Recuperação(${conceito})`;
            break;
        case (media >= 40 && media < 60):
            conceito = "D";
            document.getElementById("conceito").innerHTML = `A situação do aluno é Reprovado(${conceito})`;
            break;
        case (media < 40):
            conceito = "E";
            document.getElementById("conceito").innerHTML = `A situação do aluno é Reprovado(${conceito})`;
            break;
    }

    // deixar invisível os <p>
    document.getElementById('res').style.display = 'block';

}