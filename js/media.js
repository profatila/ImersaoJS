function calcular(){
    // Captura os valores dos campos de entrada
     var nome = document.getElementById ('nome').value;
     var id = document.getElementById ('id').value;
     var nota1 = parseFloat( document.getElementById ('nota1').value);
     var nota2 = parseFloat(document.getElementById ('nota2').value);
     var nota3 = parseFloat(document.getElementById ('nota3').value);

     let situ = ["Aprovado!", "Recuperação!", "Reprovado!"];
     let con = ["A", "B", "C", "D", "E"];
     let mai = Math.max(nota1, nota2, nota3);
     let men = Math.min(nota1, nota2, nota3);
     let mdf =  (nota1+nota2+nota3)/3; 

      switch (true) {
         case mdf >= 90:
           document.getElementById("situ").innerHTML =  'Situação: '  + situ[0];
           document.getElementById("con").innerHTML =  'Conceito: '  + con[0];
           break;
   
         case mdf >= 75 && mdf < 90:
           document.getElementById("situ").innerHTML = 'Situação: ' + situ[0];
           document.getElementById("con").innerHTML = 'Conceito: ' + con[1];
           break;
   
         case mdf >= 60 && mdf < 75:
           document.getElementById("situ").innerHTML =  'Situação: '  + situ[1];
           document.getElementById("con").innerHTML =  'Conceito: '  + con[2];
           break;
   
         case mdf >= 40 && mdf < 60:
           document.getElementById("situ").innerHTML =  'Situação: ' + situ[2];
           document.getElementById("con").innerHTML = 'Conceito: '  + con[3];
           break;
   
         case mdf < 40:
           document.getElementById("situacao").innerHTML =  'Situação: '  + situ[2];
           document.getElementById("conceito").innerHTML =  'Conceito: '  + con[4];
           break;
      }
                           
     document.getElementById('infos').innerHTML = nome + ' -' + ' ID #' + id;
     document.getElementById('bim1').innerHTML = '<h5>' + 'Nota 1º Bimestre: ' + '</h5>' + nota1;
     document.getElementById('bim2').innerHTML = '<h5>' + 'Nota 2º Bimestre: ' + '</h5>' + nota2;
     document.getElementById('bim3').innerHTML = '<h5>' + 'Nota 3º Bimestre: ' + '</h5>' + nota3;
     document.getElementById('mai').innerHTML  = '<h5>' + 'Maior Nota: ' + '</h5>' + mai;
     document.getElementById('men').innerHTML  = '<h5>' + 'Menor Nota: ' + '</h5>' + men;
     document.getElementById('mdf').innerHTML  = '<h5>' + 'Média Final: ' + '</h5>' + mdf.toFixed(2); 
   
   }