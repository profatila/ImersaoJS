const numeros = [175, 50, 25];

document.getElementById("res").innerHTML = numeros.reduce(funSub);

function funSub(total, num) {
return total - num;
}