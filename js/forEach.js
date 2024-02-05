const numeros = [45, 4, 9, 16, 25];

let txt = "";

numeros.forEach(minhaFuncao);

function minhaFuncao(value, index, array) {
  txt += value * 2 + "<br>";
}

document.getElementById("teste").innerHTML = txt