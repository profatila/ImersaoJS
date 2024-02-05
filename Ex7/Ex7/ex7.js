function juliana(){

    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let n3 = parseInt(document.getElementById('n3').value);

    document.getElementById('Nmaior').innerHTML = Math.max(n1, n2, n3);
    document.getElementById('Nmenor').innerHTML = Math.min(n1, n2, n3);

    let media = (n1 + n2 + n3)/3;
    document.getElementById('MF').innerHTML = media;

    let conceito = '';
    let resultado = '';

    if(media >= 90 ) {
        conceito = "A";
        resultado = "Aprovado"
    } else if (media >=75 && media <90) {
        conceito = "B";
        resultado = "Aprovado"
    } else if (media >= 60 && media <75) {
        conceito = "C";
        resultado = "Recuperação"
    } else if (media >= 40 && media <60) {
        conceito = "D";
        resultado = "Reprovado"
    } else {
        conceito = "E";
        resultado = "Reprovado"
    }

    document.getElementById('conceitoh').innerHTML = conceito;
    document.getElementById('passousn').innerHTML =  resultado;

    let id = document.getElementById('numID').value;
    document.getElementById('ID').innerHTML = id;
    document.getElementById('NumID').value = '';

    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';


    
  

}