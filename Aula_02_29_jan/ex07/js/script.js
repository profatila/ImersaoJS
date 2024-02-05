// Função para calcular e exibir status do aluno 
function Status() {
    // Usando DOM para obter valor do input 
    let id = document.getElementById("id").value;
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;

    // Verificando ID do Aluno 
    if (id == 0) {
        window.alert("Usuário Inexistente")
        document.getElementById("res").style = 'display:none;';
        return 0
    }// Verificando se os campos estão vazios 
    else if (n1 == '' || n2 == '' || n3 == '') {
        window.alert("Insira todas Notas!!")
        document.getElementById("res").style = 'display:none;';
        return 0
    }else if(n1 > 100 || n2 > 100 || n3 > 100){
        window.alert("Apenas notas de 0 a 100 !!")
        return 0
    }


    // Definindo os resultados para exibir 
    let mfInfo = document.getElementById("mf-res");
    mfInfo.innerHTML = "";
    let status = document.getElementById("status-res")
    status.innerHTML = ""
    let conceito = document.getElementById("conceito-res")
    conceito.innerHTML = ""
    
    // Calculando e Exibindo Maior e Menor nota 
    let menor = Math.min(parseInt(n1),parseInt(n2),parseInt(n3))
    document.getElementById("menor-res").innerHTML = `Maior nota é: ${menor}`

    let maior = Math.max(parseInt(n1),parseInt(n2),parseInt(n3))
    document.getElementById("maior-res").innerHTML = `Maior nota é: ${maior}`

    // Definindo e Calculando Média Final 
    let mf = 0.0;
    mf = parseFloat((parseInt(n1) + parseInt(n2) + parseInt(n3)) / 3).toFixed()

    // Inserindo Media Final no HTMl 
    mfInfo.innerHTML = "Média Final é: "+ parseFloat(mf);

    // Condição para saber a aprovação e conceito do Aluno 
    if (mf >= 90) {
        conceito.innerHTML = "Conceito: A";
        status.style = 'color: green;'
        status.innerHTML = "Aprovado";
    }
    else if (mf >= 75 && mf < 90) {
        conceito.innerHTML = "Conceito: B";
        status.style = 'color: green;';
        status.innerHTML = "Aprovado";
    }
    else if (mf >= 60 && mf < 75) {
        conceito.innerHTML = "Conceito: C";
        status.style = 'color: yellow;';
        status.innerHTML += "Recuperação";
    }
    else if (mf >= 40 && mf < 60) {
        conceito.innerHTML = "Conceito: D";
        status.style = 'color: red;';
        status.innerHTML += "Reprovado";
    }
    else {
        conceito.innerText = "Conceito: E";
        status.style = 'color: red;';
        status.innerHTML += "Reprovado";
    }

    // Mostrando Status do Aluno 
    document.getElementById("res").style = 'display:grid;';
}