function Cadastrar() {

    var lista_cadastros = [];

        var cadastro = document.getElementById("cadastro").innerHTML;

        var nota1 = parseInt(document.getElementById("nota1").value);
        var nota2 = parseInt(document.getElementById("nota2").value);
        var nota3 = parseInt(document.getElementById("nota3").value);

        var maior_nota = Math.max(nota1, nota2, nota3);
        var menor_nota = Math.min(nota1, nota2, nota3);

        var media = (nota1 + nota2 + nota3) / 3;

        var conceito;
        var mensagem;

        if (media >= 90) {
            conceito = "A";
            mensagem = "Aprovado";
        }
        else if (media >= 75) {
            conceito = "B";
            mensagem = "Aprovado";
        }
        else if (media >= 60) {
            conceito = "C";
            mensagem = "Recuperado";
        }
        else if (media >= 40) {
            conceito = "D";
            mensagem = "Reprovado";
        }
        else {
            conceito = "E";
            mensagem = "Reprovado";
        }

        var aluno = [cadastro, nota1, nota2, nota3, maior_nota, menor_nota, media, mensagem]
        lista_cadastros.push(aluno)

        var checar = confirm("Deseja confirir as notas?")

        var iterador = 0;

        while (iterador < lista_cadastros.length) {
        if (checar == true) {
                alert(
                    "Cadastro do aluno: " + lista_cadastros[iterador][0] +
                    "\nNota 01: " + lista_cadastros[iterador][1] +
                    "\nNota 02: " + lista_cadastros[iterador][2] +
                    "\nNota 03: " + lista_cadastros[iterador][3] +
                    "\nMaior nota: " + lista_cadastros[iterador][4] +
                    "\nMenor nota: " + lista_cadastros[iterador][5] +
                    "\nMedia: " + lista_cadastros[iterador][6] +
                    "\nSituação do Aluno: " + lista_cadastros[iterador][7]);

                    iterador++
            }
        }
    }