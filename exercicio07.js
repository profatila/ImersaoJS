//exercicio 7 de imersão Javascript do dia 29 de Janeiro
//Kevin Joel 2DM
function exibir_resultado(){

    let nomeiden =  parseInt( document.getElementById("nomeid").value);
    let nota1 = parseInt( document.getElementById("n1").value);
    let nota2 = parseInt( document.getElementById("n2").value);
    let nota3 = parseInt( document.getElementById("n3").value);

    // verifica se a informação do Nº de identificação é válida para prosseguir com o resto do processo
    if(nomeiden >= 1 && nomeiden <= 40) {
        document.getElementById('Geral').innerHTML = "Aqui estão listadas todas as informações gerais sobre Nota do aluno Nº"+nomeiden+" :";

        document.getElementById("nota1").innerHTML = "Nota do 1º bimestre: "+nota1;
        document.getElementById("nota2").innerHTML = "Nota do 2º bimestre: "+nota2;
        document.getElementById("nota3").innerHTML = "Nota do 3º bimestre: "+nota3;

        let Mediaf = (nota1 + nota2 + nota3) / 3;

        document.getElementById("media").innerHTML = "media final do aluno: "+ Mediaf.toFixed(1); 
        //variavelqualquer.tofixed(x) formata numero com Casas decimais,
        //ou seja ela define quantas casas decimais devem aparecer em "()"

        let finalResult = '';

        let maior = Math.max(nota1,nota2,nota3);
        let menor = Math.min(nota1,nota2,nota3);

        document.getElementById("maior").innerHTML = "MAIOR nota bimestral obtida do aluno: "+maior;
        document.getElementById("menor").innerHTML = "MENOR nota bimestral obtida do aluno: "+menor;

        if (Mediaf >=90){
            finalResult = 'Nota final: A, logo o aluno foi APROVADO. Parabéns!';
        } else if (Mediaf >= 75 && Mediaf < 90 ) {
            finalResult = 'Nota final: B, logo o aluno foi APROVADO. Parabéns!';
        } else if (Mediaf >= 60 && Mediaf < 75 ) {
            finalResult = 'Nota final: C, logo o aluno ficou em RECUPERAÇÃO';
        } else if (Mediaf >= 40 && Mediaf < 60 ) {
            finalResult = 'Nota final: D, logo o aluno foi REPROVADO';
        } else {
            finalResult = 'Nota final: E, logo o aluno foi REPROVADO';
        }

        document.getElementById("finalResult").innerHTML = finalResult;
} else{
    //caso o Nº de identificação seja inválido o processo irá morrer aqui com essa mensagem ficara assim até ele ser validado
    document.getElementById('Geral').innerHTML = "Número de Identificação de Aluno Desconhecido/Inexistente <br> Insira uma informação válida!";
}

}