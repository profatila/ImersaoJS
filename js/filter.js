const idades = [32, 33, 16, 40];
const resultado = idades.filter(checkAdult);

function checkAdult(idade) {
  return idade >= 18;
}
