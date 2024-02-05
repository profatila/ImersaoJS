function calcular(){
	//Entrada dos dados
	var nome = document.getElementById("setNome").value;
	document.getElementById("getNome").innerText = nome;
	var nota1 = parseInt(document.getElementById("setNota1").value);
	document.getElementById("getNota1").innerText = nota1;
	var nota2 = parseInt(document.getElementById("setNota2").value);
	document.getElementById("getNota2").innerText = nota2;
	var nota3 = parseInt(document.getElementById("setNota3").value);
	document.getElementById("getNota3").innerText = nota3;
					
	//Condições de Bimestre com maior e menor nota
	if (nota1 === nota2 && nota1 === nota3 && nota2 === nota3){
		document.getElementById("maiorBim").innerText = `As notas são equivalentes`;
		document.getElementById("menorBim").innerText = `As notas são equivalentes`;
	}
	else if (nota1 > nota2 && nota2 > nota3){
		document.getElementById("maiorBim").innerText = `1º Bimestre`;
		document.getElementById("menorBim").innerText = `3º Bimestre`;
	}
	else if (nota1 > nota3 && nota3 > nota2){
		document.getElementById("maiorBim").innerText = `1º Bimestre`;
		document.getElementById("menorBim").innerText = `2º Bimestre`;
	}
	else if (nota2 > nota3 && nota3 > nota1){
		document.getElementById("maiorBim").innerText = `2º Bimestre`;
		document.getElementById("menorBim").innerText = `1º Bimestre`;
	}
	else if (nota2 > nota1 && nota1 > nota3){
		document.getElementById("maiorBim").innerText = `2º Bimestre`;
		document.getElementById("menorBim").innerText = `3º Bimestre`;
	}
	else if (nota3 > nota2 && nota2 > nota1){
		document.getElementById("maiorBim").innerText = `3º Bimestre`;
		document.getElementById("menorBim").innerText = `1º Bimestre`;
	}
	else {
		document.getElementById("maiorBim").innerText = `3º Bimestre`;
		document.getElementById("menorBim").innerText = `2º Bimestre`;
	}
			
	// Calcula de media
	var mediaFinal = (nota1 + nota2 + nota3)/3;
	var mediaRed = mediaFinal.toFixed(2);
	document.getElementById("mediaFinal").innerText = mediaRed;
					
	// Condição de conceito
	if (mediaFinal >= 90){
		var conc = "A"
		document.getElementById("conceito").innerText = conc;
		document.getElementById("situacao").innerText = `Aprovado`;
	}
	else if (mediaFinal >=75 && mediaFinal < 90){
	    var conc = "B"
		document.getElementById("conceito").innerText = conc;
		document.getElementById("situacao").innerText = `Aprovado`;
	}
	else if (mediaFinal >= 60 && mediaFinal < 75){
		var conc = "C"
		document.getElementById("conceito").innerText = conc;
		document.getElementById("situacao").innerText = `Recuperação`;
	}
	else if (mediaFinal > 40 && mediaFinal < 60){
		var conc = "D"
		document.getElementById("conceito").innerText = conc;
		document.getElementById("situacao").innerText = `Reprovado`;
	}
	else {
		var conc = "E"
		document.getElementById("conceito").innerText = conc;
		document.getElementById("situacao").innerText = `Reprovado`;
	}
}
	