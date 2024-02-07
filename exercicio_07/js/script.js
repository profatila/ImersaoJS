function calcularNota(){
    let nome = document.querySelector('#name').value
    let nota1 = parseInt(document.querySelector('#sem1').value)
    let nota2 = parseInt(document.querySelector('#sem2').value)
    let nota3 = parseInt(document.querySelector('#sem3').value)

    document.querySelector('.apresentacao').textContent = nome;
    document.querySelector('.nota1').textContent = `Primeiro semestre: ${nota1}` 
    document.querySelector('.nota2').textContent = `Segundo semestre: ${nota2}`
    document.querySelector('.nota3').textContent = `Terceiro semestre: ${nota3}`

    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    document.querySelector("#media").textContent = media


    let list_aprovacao = [nota1, nota2, nota3]

    let maior_nota = list_aprovacao[0]

    for(let i = 0; i < maior_nota.lenght; i++){
        
        if(maior_nota < list_aprovacao[i]){
            maior_nota = list_aprovacao[i]
            
        }
    }

    if(maior_nota === nota1){
        document.querySelector('.maior').textContent = "Primeiro semestre"
    }else if(maior_nota === nota2){
        document.querySelector('.maior').textContent = "Segundo semestre"
    }else{
        document.querySelector('.maior').textContent = "terceiro semestre"
    }

    let conceito = "";
    let aprovacao = "";

    if (media >= 90) {
        conceito = "A";
        aprovacao = "Aprovado";
    
    } else if (media >= 75 && media < 90) {
        conceito = "B";
        aprovacao = "Aprovado";
    } else if (media >= 60 && media < 75) {
        conceito = "C";
        aprovacao = "Recuperação";
    } else if (media >= 40 && media < 60) {
        conceito = "D";
        aprovacao = "Reprovado";
    } else {
        conceito = "E";
        aprovacao = "Reprovado";
    }
    
    var situacaoElement = document.querySelector(".situacao");
    situacaoElement.textContent = aprovacao;

    
    if (aprovacao === "Aprovado") {
       situacaoElement.style.color = "green";
    } else if (aprovacao === "Reprovado") {
        situacaoElement.style.color = "red";
    } else if (aprovacao === "Recuperação") {
        situacaoElement.style.color = "yellow";
    }


    const teste  =document.querySelector('.container__apr');

    teste.className = 'container__apr';
}

