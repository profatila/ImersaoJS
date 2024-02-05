


document.getElementById('boletimForm').onsubmit =function(event){
    event.preventDefault();

    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value); 
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var media = (nota1 + nota2 + nota3)/3;
    var conceito = '';

    if(media >= 7){
        conceito= 'Aprovado ';
    }else if(media > 5 && media < 7){
        conceito= 'Recuperação ';
    }else{
        conceito='Reprovado';
    }

    if(nota1 > nota2 && nota1 > nota3){
                maiornota= nota1;
            }else if(nota2 > nota1 && nota2 > nota3){
                maiornota= nota2;
            }else{
                maiornota= nota3;
         }

    document.getElementById('resultado').innerHTML =
    'Número de Matrícula: '+ matricula + '<br><br>'+
    'Nota dos Bimestres:'+ nota1 +','+ nota2 +','+ nota3 +'<br><br>'+
    'Maior nota bimestral: ' +maiornota + '<br><br>'+
    'Média: '+ media.toFixed(2) + '<br><br>'+
    'Conceito: ' + conceito;
}
