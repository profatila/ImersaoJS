function function_soma(){
    //verificando se esta dentro de 0 a 100
    if (document.getElementById('input_nota_1').value > 0 && document.getElementById('input_nota_1').value <= 100 &&
        document.getElementById('input_nota_2').value > 0 && document.getElementById('input_nota_2').value <= 100 && 
        document.getElementById('input_nota_3').value > 0 && document.getElementById('input_nota_3').value <= 100 && 
        document.getElementById('input_nota_4').value > 0 && document.getElementById('input_nota_4').value <= 100){

        // Associando os números à variaveis
        let num1 = parseInt(document.getElementById('input_nota_1').value);
        let num2 = parseInt(document.getElementById('input_nota_2').value);
        let num3 = parseInt(document.getElementById('input_nota_3').value);
        let num4 = parseInt(document.getElementById('input_nota_4').value);
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);

        // Calculando a Média Final
        let media = (num1 + num2 + num3 + num4) / 4;
        console.log(media);

        document.getElementById('output_media').innerHTML = media;

        // Calculando a Maior Nota
        if (num1 > num2 && num1 > num3 && num1 > num4){
            console.log('O maior é do primeiro bimestre');

            document.getElementById('output_bim_maior').innerHTML = '1 Bimestre: ' + num1;
        }
        else if (num2 > num1 && num2 > num3 && num2 > num4){
            console.log('O maior é do segundo bimestre' );

            document.getElementById('output_bim_maior').innerHTML = '2 Bimestre: ' + num2;
        }
        else if (num3 > num1 && num3 > num2 && num3 > num4){
            console.log('O maior é do terceiro bimestre');

            document.getElementById('output_bim_maior').innerHTML = '3 Bimestre: ' + num3;
        }
        else if (num4 > num1 && num4 > num2 && num4 > num3){
            console.log('O maior é do quarto bimestre'  );

            document.getElementById('output_bim_maior').innerHTML = '4 Bimestre: ' + num4;
        }
        else{
            console.log('Há notas iguais, não foi possível determinar a maior nota.')

            document.getElementById('output_bim_maior').innerHTML = 'Há notas iguais, não foi possível determinar a maior nota.';
        }
    
        // Calculando a Menor Nota
        if (num1 < num2 && num1 < num3 && num1 < num4){
            console.log('O menor é do primeiro bimestre')

            document.getElementById('output_bim_menor').innerHTML = '1 Bimestre: ' + num1;
        }
        else if (num2 < num1 && num2 < num3 && num2 < num4){
            console.log('O menor é do segundo bimestre' )

            document.getElementById('output_bim_menor').innerHTML = '2 Bimestre: ' + num2;
        }
        else if (num3 < num1 && num3 < num2 && num3 < num4){
            console.log('O menor é do terceiro bimestre')

            document.getElementById('output_bim_menor').innerHTML = '3 Bimestre: ' + num3;
        }
        else if (num4 < num1 && num4 < num2 && num4 < num3){
            console.log('O menor é do quarto bimestre'  );

            document.getElementById('output_bim_menor').innerHTML = '4 Bimestre: ' + num4;
        }
        else{
            console.log('Há notas iguais, não foi possível determinar a menor nota.')

            document.getElementById('output_bim_menor').innerHTML = 'Há notas iguais, não foi possível determinar a menor nota.';
        }

        // Calculando a Resultado Final
        if (media >= 90){ 
            console.log('aprovado    A');

            document.getElementById('output_final').innerHTML = 'aprovado [A]';
        }
        else if (media >= 75){
            console.log('aprovado    B');

            document.getElementById('output_final').innerHTML = 'aprovado [B]';
        }
        else if (media >= 60){
            console.log('recuperação C');

            document.getElementById('output_final').innerHTML = 'recuperação [C]';
        }
        else if (media >= 40){
            console.log('reprovado   D');

            document.getElementById('output_final').innerHTML = 'reprovado [D]';
        }
        else{
            console.log('reprovado   E');

            document.getElementById('output_final').innerHTML = 'reprovado [E]';
        }

        // Há como melhorar usando HashMap ou lista[] 
        // porém não como fazer isso no momento.
        // vamos de 'if else' hehe
    }
    else{
        // caso não atenda os requisitos mínimos
        window.alert('Preencha todas as notas corretamente!');
    }

}

function function_text1(){
    let nome_aluno = document.getElementById('input_nome_aluno').value;
    console.log(nome_aluno);

    document.getElementById('output_nome_aluno').innerHTML = nome_aluno;
}
function function_text2(){
    let UC         = document.getElementById('input_UC_aluno').value;
    console.log(UC);

}
function function_text3(){
    let professor  = document.getElementById('input_professor_aluno').value;
    console.log(professor);
}