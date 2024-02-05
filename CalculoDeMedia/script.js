function media() {
  let id = 1;
  let situacao = ["Aprovado!", "Recuperação!", "Reprovado!"];
  let conceito = ["A", "B", "C", "D", "E"];
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  let nome = document.getElementById("nome").value;

  if (nota1 && nota2 && nota3 && nome != "") {
    let mf = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

    switch (true) {
      case mf >= 90:
        document.getElementById("situacao").innerHTML = situacao[0];
        document.getElementById("conceito").innerHTML = conceito[0];
        break;

      case mf >= 75 && mf < 90:
        document.getElementById("situacao").innerHTML = situacao[0];
        document.getElementById("conceito").innerHTML = conceito[1];
        break;

      case mf >= 60 && mf < 75:
        document.getElementById("situacao").innerHTML = situacao[1];
        document.getElementById("conceito").innerHTML = conceito[2];
        break;

      case mf >= 40 && mf < 60:
        document.getElementById("situacao").innerHTML = situacao[2];
        document.getElementById("conceito").innerHTML = conceito[3];
        break;

      case mf < 40:
        document.getElementById("situacao").innerHTML = situacao[2];
        document.getElementById("conceito").innerHTML = conceito[4];
        break;

      default:
        console.log("Algo deu errado no Switch case");
    }

    let maior = Math.max(nota1, nota2, nota3);
    let menor = Math.min(nota1, nota2, nota3);

    document.getElementById("maior").innerHTML = maior;
    document.getElementById("menor").innerHTML = menor;
    document.getElementById("resultado").innerHTML = mf;
    document.getElementById("id").innerHTML = id;
    document.getElementById("nomes").innerHTML = nome;
    document.getElementById("error").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML =
      "Favor preencher todos os campos do formulario!!";
  }
}

function limpar() {
  document.getElementById("maior").innerHTML = "";
  document.getElementById("menor").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("id").innerHTML = "";
  document.getElementById("nomes").innerHTML = "";
  document.getElementById("error").innerHTML = "";
  document.getElementById("conceito").innerHTML = "";
  document.getElementById("situacao").innerHTML = "";
  nome.value = "";
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
}
